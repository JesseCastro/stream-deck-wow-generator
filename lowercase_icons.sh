#!/bin/bash
# Lowercase ALL icon filenames in Assets/Icons/WoW_Combined

find Assets/Icons/WoW_Combined -depth -name "*.png" | while read file; do
    dir=$(dirname "$file")
    base=$(basename "$file")
    lower=$(echo "$base" | tr '[:upper:]' '[:lower:]')
    
    if [ "$base" != "$lower" ]; then
        mv "$file" "$dir/$lower"
    fi
done

echo "All icon files lowercased"
