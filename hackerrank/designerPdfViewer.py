def designerPdfViewer(h, word):
    # Write your code here
    def get_h(ch):
        return h[ord(ch) - ord('a')]

    return max(map(get_h, word)) * len(word)
