#!/bin/bash

# Simple script to resize all PNGs in a directory to 144x144 using macOS built-in 'sips'
# Usage: ./resize_icons.sh <directory_path>

TARGET_DIR=$1

if [ -z "$TARGET_DIR" ]; then
    echo "Usage: $0 <directory_path>"
    exit 1
fi

echo "Resizing icons in $TARGET_DIR to 144x144..."

find "$TARGET_DIR" -name "*.png" -print0 | while IFS= read -r -d '' file; do
    # Check dimensions (optional, but sips is fast enough to just overwrite)
    sips -z 144 144 "$file" --out "$file" > /dev/null
done

echo "Resize complete."
