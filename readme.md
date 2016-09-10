Vote Counter
------------
This is a vote counter created for the Anime O-tekku! club at Georgia Tech.

![Ballot used for fall 2016 voting](fall%202016%20ballot.PNG)

How to Use
----------
 
Format for storing votes

- Manually enter the votes in `votes.txt`
- One line for each person  
- All the letters representing the votes one word in order 
- (Optional) Follow by name separated by space if the vote to keep track of who voted

Example:
```
abdef Bob
gedcj
jhdib
agjdb
```

Run by entering `node anime.js`

Winners will be displayed on console.

Vote data will be dumped into `anime_sum.csv` to be easily imported into Excel
