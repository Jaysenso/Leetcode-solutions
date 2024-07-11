class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        freq = dict(Counter(nums)) #count the frequency of each number
        res = 0
        maxFreq = max(freq.values()) #find the maximum frequency
        for num,count in freq.items():
            if count == maxFreq:
                res += count
        return res
