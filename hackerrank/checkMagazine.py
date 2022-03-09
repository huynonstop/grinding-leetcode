def checkMagazine(magazine, note):
    # Write your code here

    m_dict = dict()
    for w in magazine:
        c = m_dict.get(w, 0)
        m_dict[w] = c + 1

    for w in note:
        if w not in m_dict or m_dict[w] == 0:
            print('No')
            return
        m_dict[w] -= 1

    print('Yes')
    return
