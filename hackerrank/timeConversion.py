def timeConversion(s):
    # Write your code here
    h = s[:2]
    ap = s[-2:]

    nh = (int(h) % 12 + (12 if ap == 'PM' else 0)) % 24
    return f'{nh:02}{s[2:-2]}'
