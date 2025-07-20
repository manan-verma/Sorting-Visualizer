function Merge() {
    // Set Time and Space Complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";
    document.getElementById("Space_Worst").innerText = "O(N)";

    c_delay = 0;

    merge_partition(0, array_size - 1);

    enable_buttons();
}

function merge_partition(start, end) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);

        // Highlight midpoint in yellow
        div_update(divs[mid], div_sizes[mid], "yellow");

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    }
}

function merge_sort(start, mid, end) {
    let p = start;
    let q = mid + 1;
    let k = 0;
    const Arr = [];

    // Merge the two halves into temporary array Arr[]
    while (p <= mid && q <= end) {
        if (div_sizes[p] < div_sizes[q]) {
            Arr[k++] = div_sizes[p];
            div_update(divs[p], div_sizes[p], "red");
            p++;
        } else {
            Arr[k++] = div_sizes[q];
            div_update(divs[q], div_sizes[q], "red");
            q++;
        }
    }

    // Copy remaining elements from left half
    while (p <= mid) {
        Arr[k++] = div_sizes[p];
        div_update(divs[p], div_sizes[p], "red");
        p++;
    }

    // Copy remaining elements from right half
    while (q <= end) {
        Arr[k++] = div_sizes[q];
        div_update(divs[q], div_sizes[q], "red");
        q++;
    }

    // Copy sorted elements back to div_sizes[] and update visuals
    for (let i = 0; i < k; i++) {
        div_sizes[start + i] = Arr[i];
        div_update(divs[start + i], Arr[i], "green");
    }
}
