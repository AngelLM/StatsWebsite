PATH=/usr/bin::/usr/local/bin:://usr/sbin
export DISPLAY=:0
cd /home/angellm/repos/StatsWebsite
python StatsWebsite.py >> logs/errorlog.txt
python gettingData.py
now='date +%Y-%m-%d_%H:%M:%S)'
git add ./
git commit -m "Automatic commit $now"
git push origin master
