def caesarCipher(s: str, k):
    # Write your code here
    org = 'abcdefghijklmnopqrstuvwxyz'

    def find_encrypt(c):
        return (ord(c) - ord('a') + k) % m

    m = len(org)
    encrypt = ''
    for c in s:
        if not c.isalpha():
            encrypt += c
        elif c.islower():
            encrypt += org[find_encrypt(c)]
        else:
            encrypt += org[find_encrypt(c.lower())].upper()
    return encrypt


print(caesarCipher('middle-Outz', 2))
