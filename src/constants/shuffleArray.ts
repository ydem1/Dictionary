export function shuffleArray<T>(arr: T[], length: number) {
  const copyArr = arr.slice();

  return copyArr.sort(() => Math.random() - 0.5).slice(0, length);
}
