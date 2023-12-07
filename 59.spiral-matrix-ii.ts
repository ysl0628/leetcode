/*
 * @lc app=leetcode id=59 lang=typescript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
    // endCol 和 endRow 值為 n-1 實現左閉右開
    let startCol = 0, endCol = n-1;
    let startRow = 0, endRow = n-1;
    const result = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let num = 1
    
    while(startCol <= endCol && startRow <= endRow){
        // 由左到右 // 完成 1, 2
        for( let i = startCol; i <= endCol; i++){
            result[startRow][i] = num++;
        }
        // 下一次由左到右是第二排開始
        startRow++;

        // 由上到下 // 完成 3, 4
        for( let i = startRow; i <= endRow; i++){
            result[i][endCol] = num++;
        }
        // 下一次由上到下是從 endCol 的前面一列開始
        endCol--

        // 由右到左
        for( let i = endCol; i >= startCol; i--){
            result[endRow][i] = num++
        }
        endRow--

        // 由下到上
        for(let i = endRow; i >= startRow; i--){
            result[i][startCol] = num++
        }
        startCol++

    }
    return result
    
};
// @lc code=end

