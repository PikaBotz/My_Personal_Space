function findSimilarCmd(inputCmd, commandList, threshold) {
    return commandList.filter(word => calculateDistance(inputCmd, word) <= threshold);
}

function calculateDistance(a, b) {
    const lenA = a.length;
    const lenB = b.length;
    const matrix = Array.from({ length: lenB + 1 }, (_, i) => Array(lenA + 1).fill(0));
    for (let i = 0; i <= lenB; i++) matrix[i][0] = i;
    for (let j = 0; j <= lenA; j++) matrix[0][j] = j;
    for (let i = 1; i <= lenB; i++) {
        for (let j = 1; j <= lenA; j++) {
            const cost = a[j - 1] === b[i - 1] ? 0 : 1;
            matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + cost);
            if (i > 1 && j > 1 && a[j - 1] === b[i - 2] && a[j - 2] === b[i - 1]) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + cost);
            }
            if (i > 1 && j > 1 && a[j - 1] === a[j - 2] && b[i - 1] === b[i - 2]) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + 1);
            }
        }
    }
    return matrix[lenB][lenA];
}

function formatOr(similarWords, prefix) {
    const length = similarWords.length;
    if (length === 1) {
        return `'${prefix + similarWords[0]}'`;
    } else if (length === 2) {
        return `'${prefix + similarWords[0]}' or '${prefix + similarWords[1]}'`;
    } else if (length >= 3) {
        const limitedWords = similarWords.slice(0, 3);
        const lastWord = limitedWords.pop();
        return `'${prefix}${limitedWords.join("', '" + prefix)}' or '${prefix + lastWord}'`;
    }
}
