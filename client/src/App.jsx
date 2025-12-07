import { useState, useEffect } from 'react'

function App() {
    // State
    const [classes, setClasses] = useState([])
    const [specs, setSpecs] = useState([])
    const [races, setRaces] = useState([])

    const [selectedClass, setSelectedClass] = useState('')
    const [selectedSpec, setSelectedSpec] = useState('')
    const [selectedRace, setSelectedRace] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [downloads, setDownloads] = useState(null)

    // Fetch classes on mount
    useEffect(() => {
        fetch('/api/classes')
            .then(res => res.json())
            .then(data => setClasses(data.classes || []))
            .catch(err => setError('Failed to load classes'))
    }, [])

    // Fetch races on mount
    useEffect(() => {
        fetch('/api/races')
            .then(res => res.json())
            .then(data => setRaces(data.races || []))
            .catch(err => setError('Failed to load races'))
    }, [])

    // Fetch specs when class changes
    useEffect(() => {
        if (!selectedClass) {
            setSpecs([])
            setSelectedSpec('')
            return
        }

        fetch(`/api/classes/${selectedClass}/specs`)
            .then(res => res.json())
            .then(data => {
                setSpecs(data.specs || [])
                setSelectedSpec('')
            })
            .catch(err => setError('Failed to load specs'))
    }, [selectedClass])

    // Handle generation
    const handleGenerate = async () => {
        if (!selectedClass || !selectedSpec || !selectedRace) return

        setLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    classId: selectedClass,
                    specId: selectedSpec,
                    raceId: selectedRace
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Generation failed')
            }

            setDownloads(data.downloads)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const canGenerate = selectedClass && selectedSpec && selectedRace && !loading

    return (
        <div className="app">
            <header className="header">
                <h1 className="title">Stream Deck Generator</h1>
                <p className="subtitle">Create custom WoW profiles for your Elgato Stream Deck</p>
            </header>

            <div className="card">
                {error && <div className="error">{error}</div>}

                <div className="form-group">
                    <label htmlFor="class-select">Class</label>
                    <select
                        id="class-select"
                        value={selectedClass}
                        onChange={e => setSelectedClass(e.target.value)}
                    >
                        <option value="">Select a class...</option>
                        {classes.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="spec-select">Specialization</label>
                    <select
                        id="spec-select"
                        value={selectedSpec}
                        onChange={e => setSelectedSpec(e.target.value)}
                        disabled={!selectedClass}
                    >
                        <option value="">
                            {selectedClass ? 'Select a spec...' : 'Choose a class first'}
                        </option>
                        {specs.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="race-select">Race</label>
                    <select
                        id="race-select"
                        value={selectedRace}
                        onChange={e => setSelectedRace(e.target.value)}
                    >
                        <option value="">Select a race...</option>
                        {races.map(r => (
                            <option key={r.id} value={r.id}>{r.name}</option>
                        ))}
                    </select>
                </div>

                <button
                    className={`generate-btn ${loading ? 'loading' : ''}`}
                    onClick={handleGenerate}
                    disabled={!canGenerate}
                >
                    {loading ? 'Generating...' : 'Generate Profile'}
                </button>
            </div>

            <footer className="footer">
                <p>
                    Built with ❤️ for the WoW community •{' '}
                    <a href="https://github.com/JesseCastro/stream-deck-wow-generator" target="_blank" rel="noopener">
                        GitHub
                    </a>
                </p>
            </footer>

            {/* Download Modal */}
            {downloads && (
                <div className="modal-overlay" onClick={() => setDownloads(null)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <h2>✓ Profile Generated!</h2>
                        <ul className="download-list">
                            <li>
                                <a className="download-link" href={downloads.profile} download>
                                    📦 Stream Deck Profile (.streamDeckProfile)
                                </a>
                            </li>
                            <li>
                                <a className="download-link" href={downloads.keybinds} download>
                                    ⌨️ Keybinds Reference (.txt)
                                </a>
                            </li>
                            <li>
                                <a className="download-link" href={downloads.lua} download>
                                    🔧 Lua Install Script (.lua)
                                </a>
                            </li>
                        </ul>
                        <button className="close-btn" onClick={() => setDownloads(null)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
