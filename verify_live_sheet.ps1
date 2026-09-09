$url = "https://script.google.com/macros/s/AKfycbwFJv_FgkbG6eo2Me8tVhaAGLXDIxoK9E3boZalHft1tENw82k2zLUsnRZ6iz0HcqQQ/exec"

Write-Output "Testing GET request..."
try {
    $res = Invoke-RestMethod -Uri $url -Method Get -MaximumRedirection 5
    Write-Output "GET Success: $res"
} catch {
    Write-Output "GET Failed: $($_.Exception.Message)"
}

Write-Output "Testing POST submission..."
$payload = @{
    timestamp = (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
    studentName = "Aarav Reddy"
    dob = "2016-08-20"
    gender = "Male"
    grade = "Class IV"
    parentName = "K. Satish Reddy"
    relationship = "Father"
    phone = "+91 99645 11122"
    email = "admissions@samsidh.in"
    address = "Main Road, Near Bus Stand"
    city = "Vempalli"
    pincode = "516329"
    message = "First verified live admission submission test!"
    status = "New Application"
    source = "School Website Form"
} | ConvertTo-Json

try {
    $postRes = Invoke-RestMethod -Uri $url -Method Post -Body $payload -ContentType "text/plain;charset=utf-8" -MaximumRedirection 5
    Write-Output "POST Success:"
    Write-Output ($postRes | ConvertTo-Json)
} catch {
    Write-Output "POST Failed: $($_.Exception.Message)"
}
