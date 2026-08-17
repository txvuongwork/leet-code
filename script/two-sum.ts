// Base solution
// export function twoSum(nums: number[], target: number): number[] {
//     const pairs: Map<number, number> = new Map();

//     nums.forEach((num, idx) => {
//         pairs.set(num, idx);
//     });

//     for (let i = 0; i < nums.length; i++) {
//         const remainValueIdx = pairs.get(target - nums[i]);
//         if (remainValueIdx !== undefined && remainValueIdx !== i) {
//             return [i, remainValueIdx];
//         }

//         pairs.set(nums[i], i);
//     }

//     return [];
// }

// Optimized solution with one pass & change variable names
export function twoSum(nums: number[], target: number): number[] {
    const seen: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complementIdx = seen.get(target - nums[i]);
        if (complementIdx !== undefined) {
            return [complementIdx, i];
        }
        seen.set(nums[i], i);
    }

    return [];
}
