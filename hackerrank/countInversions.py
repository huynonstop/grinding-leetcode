def countInversions(arr):
    # Write your code here
    l = 0
    r = len(arr) - 1

    def merge_2(s, m, e):
        left = arr[s:m+1]
        right = arr[m+1:e+1]
        i = j = 0
        k = s
        count = 0
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                arr[k] = left[i]
                i += 1
                k += 1
            else:
                count += len(left) - i
                arr[k] = right[j]
                j += 1
                k += 1
        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1
        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1
        return count

    def merge(s, m, e):
        count = 0
        i = s
        j = m + 1
        temp = []

        while i <= m and j <= e:
            if arr[i] > arr[j]:
                # there is an inversion
                count += (m + 1 - i)
                temp.append(arr[j])
                j += 1
            else:
                temp.append(arr[i])
                i += 1

        while i <= m:
            temp.append(arr[i])
            i += 1
        while j <= e:
            temp.append(arr[j])
            j += 1
        arr[s:e+1] = temp
        return count

    def merge_sort(s, e):
        total = 0
        if s < e:
            m = (s + e) >> 1
            total += merge_sort(s, m)
            total += merge_sort(m+1, e)
            total += merge(s, m, e)
        return total

    return merge_sort(l, r)


print(countInversions([2, 1, 3, 1, 2]))
