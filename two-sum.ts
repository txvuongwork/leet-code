export function twoSum(nums: number[], target: number): number[] {
    const pairs: Map<number, number> = new Map();

    nums.forEach((num, idx) => {
        pairs.set(num, idx);
    });

    for (let i = 0; i < nums.length; i++) {
        const remainValueIdx = pairs.get(Math.abs(target - nums[i]));
        if (remainValueIdx && remainValueIdx !== i) {
            return [i, remainValueIdx];
        }
    }

    return [];
}
