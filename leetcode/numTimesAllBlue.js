/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function (light) {
  let right = 0;
  let rs = 0;
  for (let i = 0; i < light.length; i++) {
    right = Math.max(right, light[i]);
    if (right === i + 1) rs++;
  }
  return rs;
};

// int numTimesAllBlue(vector<int>& light)
// {
//     vector<bool> on(light.size(),false);
//     int maxBlue=0,result=0;
//     for(int i=0;i<light.size();i++)
//     {
//         on[light[i]-1]=true;
//         while(maxBlue<light.size()&&on[maxBlue])   //Increase the end of blue bulbs sequence starting from 0,
//             maxBlue++;
//         result+=maxBlue==i+1;                  		//If number of blue bulbs is equal to number of switched on bulbs.
//     }
//     return result;
// }
