// O(n) time, O(n) space
// export function removeDuplicates(nums: number[]): number {
//     const uniqueNums: number[] = [];

//     for (const val of nums) {
//         if (!uniqueNums.length || uniqueNums[uniqueNums.length - 1] < val) {
//             uniqueNums.push(val);
//         }
//     }

//     for (let i = 0; i < uniqueNums.length; i++) {
//         nums[i] = uniqueNums[i];
//     }

//     return uniqueNums.length;
// }

// O(n) time, O(1) space
// export function removeDuplicates(nums: number[]): number {
//     if (!nums.length) return 0;

//     let fast = 1;
//     let currentValue = nums[0];
//     let k = 1;

//     for (let slow = 1; slow < nums.length || fast < nums.length; slow++) {
//         if (nums[slow - 1] < nums[slow]) {
//             fast++;
//             currentValue = nums[slow];
//             continue;
//         }

//         while (fast < nums.length) {
//             fast++;
//             if (currentValue < nums[fast]) {
//                 const temp = nums[slow];
//                 nums[slow] = nums[fast];
//                 nums[fast] = temp;
//                 currentValue = nums[slow];
//                 break;
//             }
//         }
//     }

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i - 1] < nums[i]) k++;
//         else break;
//     }

//     return k;
// }

export function removeDuplicates(nums: number[]): number {
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return nums.length ? k : 0;
}
