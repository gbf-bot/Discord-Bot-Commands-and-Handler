function chunkAverage(chunkArray, size) {
  if (!size || !chunkArray || !chunkArray.length <= 0) return;
  let renderedChunk;
  let chunkAverage = 0;
  let chunkSum = 0;

  const mainChunk = [];
  const averageChunks = [];

  const splitIndex = !Number.isNaN(size) ? size : 5;

  while (chunkArray.length > 0) {
    renderedChunk = chunkArray.splice(0, splitIndex);

    mainChunk.push(renderedChunk);
  }

  for (let j = 0; j < mainChunk.length; j++) {
    chunkSum = mainChunk[j].reduce((partialSum, a) => partialSum + a, 0);
    chunkAverage = chunkSum / mainChunk[j].length;
    averageChunks.push(chunkAverage);
  }
  return averageChunks;
}