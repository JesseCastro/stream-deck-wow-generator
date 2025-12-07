# Development Constitution

> **Guiding principles for building secure, maintainable, and professional software.**

This document establishes the non-negotiable standards for this project. All contributors must adhere to these principles.

---

## 1. Security First

### 1.1 No Secrets in Code
- **Never** commit API keys, passwords, tokens, or credentials
- Use environment variables for all sensitive configuration
- Maintain `.gitignore` to exclude secret files (`.env`, `*.pem`, `*.key`)
- Run `detect-secrets` and `gitleaks` pre-commit hooks

### 1.2 Input Validation
- Validate and sanitize **all** user input server-side
- Use allowlists, not blocklists
- Reject unexpected input types or values
- Log suspicious input patterns

### 1.3 No Arbitrary Code Execution
- Never use `eval()`, `Function()`, or dynamic `require()` with user input
- Avoid shell commands with user-controlled parameters
- Use parameterized queries for any database operations

### 1.4 Minimal Attack Surface
- Disable unused features and endpoints
- Run containers as non-root users
- Use read-only filesystems where possible
- Expose only required ports

---

## 2. Testing is Non-Negotiable

### 2.1 Coverage Requirements
- **Minimum 80%** line coverage for all new code
- **100%** coverage for security-critical paths
- Tests must pass before any merge

### 2.2 Test Types
- **Unit Tests**: Isolated function testing (Jest)
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Full workflow validation
- **Security Tests**: Input fuzzing, injection attempts

### 2.3 Test-Driven Development
- Write tests before implementation when possible
- Red-Green-Refactor cycle
- Tests are documentation

---

## 3. Code Quality Standards

### 3.1 Linting
- **Zero lint errors** (warnings acceptable with justification)
- ESLint for JavaScript/TypeScript
- Run linting in CI/CD pipeline

### 3.2 Formatting
- Consistent code style (Prettier recommended)
- 2-space indentation
- No trailing whitespace
- LF line endings

### 3.3 Documentation
- JSDoc comments for all public functions
- README.md must be current and accurate
- Architecture decisions documented in `/docs`

### 3.4 Naming Conventions
- `camelCase` for variables and functions
- `PascalCase` for classes and components
- `SCREAMING_SNAKE_CASE` for constants
- Descriptive names over abbreviations

---

## 4. Architecture Principles

### 4.1 Separation of Concerns
- Backend handles data and business logic
- Frontend handles presentation only
- No business logic in templates/views

### 4.2 Stateless Services
- Containers should be stateless
- Use volumes for persistent data
- Enable horizontal scaling

### 4.3 Dependency Management
- Pin dependency versions exactly
- Audit dependencies regularly (`npm audit`)
- Minimize dependency count
- Prefer well-maintained packages with security records

### 4.4 Configuration
- Environment-based configuration
- Sensible defaults for all settings
- Document all configuration options

---

## 5. Docker Best Practices

### 5.1 Image Security
- Use official base images
- Pin specific image versions (not `latest`)
- Multi-stage builds to minimize image size
- Scan images for vulnerabilities (Trivy, Clair)

### 5.2 Container Hygiene
- Run as non-root user
- Use read-only root filesystem
- No unnecessary capabilities
- Health checks for all services

### 5.3 Compose Standards
- Version pin all services
- Use named networks
- Secrets via Docker secrets or environment
- Resource limits defined

---

## 6. API Design

### 6.1 RESTful Principles
- Predictable URL structure
- Appropriate HTTP methods (GET, POST, DELETE)
- Meaningful status codes
- JSON responses with consistent structure

### 6.2 Error Handling
- Never expose stack traces to clients
- Log errors server-side with context
- Return user-friendly error messages
- Distinguish client errors (4xx) from server errors (5xx)

### 6.3 Rate Limiting
- Implement rate limiting for public endpoints
- Prevent resource exhaustion attacks
- Log rate limit violations

---

## 7. Logging and Observability

### 7.1 Logging Standards
- Structured JSON logs
- Include request IDs for tracing
- Log levels: DEBUG, INFO, WARN, ERROR
- Never log sensitive data

### 7.2 Monitoring
- Health check endpoints
- Metrics for performance tracking
- Alerting for critical failures

---

## 8. Git Workflow

### 8.1 Branching
- `main` is always deployable
- Feature branches for new work
- Pull requests for all changes

### 8.2 Commits
- Atomic commits (one logical change)
- Descriptive commit messages
- Reference issues when applicable

### 8.3 Pre-commit Hooks
- Lint check
- Test execution (quick tests)
- Secret scanning

---

## 9. Public Hosting Considerations

### 9.1 No Authentication Required
- Public tools should be usable without login
- No user data collection
- No session management needed

### 9.2 Abuse Prevention
- Rate limiting per IP
- CAPTCHA for expensive operations (optional)
- Reasonable resource limits

### 9.3 Privacy
- No tracking beyond necessary logs
- Clear privacy statement if applicable
- No third-party analytics without disclosure

---

## Summary

**If in doubt:**
1. Is it secure? If not, fix it.
2. Is it tested? If not, write tests.
3. Is it documented? If not, document it.
4. Is it simple? If not, simplify it.

> *Clean code is not written by following a set of rules. Clean code is written by professionals who understand that clarity is king.* — Robert C. Martin
