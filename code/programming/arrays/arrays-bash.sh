#!/bin/bash

# 1. Storing Data
data=(1 2 3 4 5)
echo "Original Data: ${data[@]}"

# 2. Mathematical Operations
squared_data=()
for i in "${data[@]}"; do
  squared_data+=($(($i * $i)))
done
echo "Squared Data: ${squared_data[@]}"

# 3. Sorting and Searching
sorted_data=($(for i in "${data[@]}"; do echo $i; done | sort -n))
echo "Sorted Data: ${sorted_data[@]}"

search_value=3
search_index=-1
for i in "${!data[@]}"; do
  if [[ ${data[i]} -eq $search_value ]]; then
    search_index=$i
    break
  fi
done
echo "Index of $search_value: $search_index"

# 4. Data Analysis
sum_value=0
for i in "${data[@]}"; do
  sum_value=$(($sum_value + $i))
done
mean_value=$(echo "scale=2; $sum_value / ${#data[@]}" | bc)
echo "Mean Value: $mean_value"
echo "Sum Value: $sum_value"

# 5. Multidimensional Arrays
matrix=(
  "1 2 3"
  "4 5 6"
  "7 8 9"
)
echo "Original Matrix:"
for row in "${matrix[@]}"; do
  echo "$row"
done

# Transpose the matrix
transpose() {
  echo "$1" | awk '
  {
    for (i=1; i<=NF; i++) {
      a[NR,i] = $i
    }
  }
  NF>p { p = NF }
  END {
    for (i=1; i<=p; i++) {
      str = a[1,i]
      for (j=2; j<=NR; j++) {
        str = str" "a[j,i]
      }
      print str
    }
  }'
}

transposed_matrix=$(transpose "$(echo "${matrix[@]}" | tr ' ' '\n')")
echo "Transposed Matrix:"
echo "$transposed_matrix"

# Image Processing (simulated with a simple 2D array)
image=()
for ((i=0; i<5; i++)); do
  row=()
  for ((j=0; j<5; j++)); do
    row+=($(echo "scale=2; $RANDOM/32768" | bc))
  done
  image+=("${row[@]}")
done

echo "Original Image:"
for row in "${image[@]}"; do
  echo "$row"
done

# Simple operation on image
brighter_image=()
for row in "${image[@]}"; do
  new_row=()
  for pixel in $row; do
    new_row+=($(echo "scale=2; $pixel * 1.2" | bc))
  done
  brighter_image+=("${new_row[@]}")
done

echo "Brighter Image:"
for row in "${brighter_image[@]}"; do
  echo "$row"
done

