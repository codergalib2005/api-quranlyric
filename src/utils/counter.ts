export default function counter(num: number): string {
  if (num >= 1000) {
    return `${num}`;
  } else if (num >= 100) {
    return `0${num}`;
  } else if (num >= 10) {
    return `0${num}`;
  } else if (num >= 0) {
    return `00${num}`;
  } else {
    return `${num}`;
  }
}
