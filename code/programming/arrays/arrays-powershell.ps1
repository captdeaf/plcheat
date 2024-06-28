# 1. Storing Data
$data = 1, 2, 3, 4, 5
Write-Host "Original Data: $($data -join ', ')"

# 2. Mathematical Operations
$squaredData = $data | ForEach-Object { $_ * $_ }
Write-Host "Squared Data: $($squaredData -join ', ')"

# 3. Sorting and Searching
$sortedData = $data | Sort-Object
Write-Host "Sorted Data: $($sortedData -join ', ')"

$searchValue = 3
$searchIndex = $data.IndexOf($searchValue)
Write-Host "Index of $searchValue: $searchIndex"

# 4. Data Analysis
$meanValue = ($data | Measure-Object -Average).Average
Write-Host "Mean Value: $meanValue"

$sumValue = ($data | Measure-Object -Sum).Sum
Write-Host "Sum Value: $sumValue"

# 5. Multidimensional Arrays
$matrix = @(
    @(1, 2, 3)
    @(4, 5, 6)
    @(7, 8, 9)
)
Write-Host "Original Matrix:"
$matrix | ForEach-Object { $_ -join ' ' }

# Transpose the matrix
$transposedMatrix = 0..2 | ForEach-Object {
    0..2 | ForEach-Object {
        $matrix[$_][$PSItem]
    }
}
Write-Host "Transposed Matrix:"
$transposedMatrix | ForEach-Object { $_ -join ' ' }

# Example of matrix multiplication (identity matrix)
$identityMatrix = @(
    @(1, 0, 0)
    @(0, 1, 0)
    @(0, 0, 1)
)
$productMatrix = 0..2 | ForEach-Object {
    0..2 | ForEach-Object {
        $sum = 0
        0..2 | ForEach-Object {
            $sum += $matrix[$_]$PSItem * $identityMatrix[$_][$PSItem]
        }
        $sum
    }
}
Write-Host "Matrix Product with Identity Matrix:"
$productMatrix | ForEach-Object { $_ -join ' ' }

# Image Processing (simulated with a simple 2D array)
$image = 0..4 | ForEach-Object {
    0..4 | ForEach-Object {
        Get-Random -Minimum 0 -Maximum 1
    }
}
Write-Host "Original Image:"
$image | ForEach-Object { $_ -join ' ' }

# Simple operation on image
$brighterImage = $image | ForEach-Object {
    $_ | ForEach-Object { $_ * 1.2 }
}
Write-Host "Brighter Image:"
$brighterImage | ForEach-Object { $_ -join ' ' }

