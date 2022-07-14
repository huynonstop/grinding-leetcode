// def naive(A, K):
//     result = inf
//     for i in range(len(A) + 1 - K):
//         copy = A.copy()
//         del copy[i : i+K]
//         result = min(result, max(copy) - min(copy))
//     return result

function solution(A, K) {
  N = len(A);
  rs = float('inf');
  for (let i = 0; i < N + 1 - K; i++) {
    const copy = [...A];
  }
}
