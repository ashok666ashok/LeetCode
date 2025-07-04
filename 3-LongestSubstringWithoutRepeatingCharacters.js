/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    set=new Set();
    left = 0;
    maxSize = 0;
    for(right=0;right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxSize = Math.max(maxSize,right-left+1);
    }
    return maxSize;
};
