class SequenceSum {
  static showSequence(n) {
    return n < 0
      ? `${n}<0`
      : `${Array.from({ length: n + 1 }, (v, k) => k).join('+')}${
          n ? ' = ' : '='
        }${(n * (n + 1)) / 2}`;
  }
}

console.log(SequenceSum.showSequence(0));
console.log(SequenceSum.showSequence(-1));
