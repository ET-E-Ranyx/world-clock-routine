Add-Type -AssemblyName System.Drawing

$inputPath = "c:\Users\user\Desktop\world-clock\icon.png"
$outputPath = "c:\Users\user\Desktop\world-clock\icon.ico"

# Read image
$img = [System.Drawing.Image]::FromFile($inputPath)

# Create a square bitmap
$bitmap = New-Object System.Drawing.Bitmap($img, 256, 256)
$iconHandle = $bitmap.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($iconHandle)

# Save as .ico
$stream = New-Object System.IO.FileStream($outputPath, [System.IO.FileMode]::Create)
$icon.Save($stream)
$stream.Close()
$icon.Dispose()
$bitmap.Dispose()
$img.Dispose()

Write-Host "Successfully generated icon.ico"
