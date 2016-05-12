# linuxproject
<p>A nodejs express app for tracking calories and strength gains. Future description to come.</p>

##Grunt commands##
#[production]
grunt
#runs default tasks 'concat', 'uglify', 'cssmin', including require.js

#Be sure to comment/uncomment the appropriate concat command [dev or production]
#concast less files to concat.less

#dev
grunt dev
#runs the above commands, with +1 = 'watch'

##Package.json##
# converts concat.less >> build/styles.css
npm run lesscon 

# this will browserify the concat client-side js('grunt' default will concat js files)
npm run build

##flightplan.js##

fly production
fly dev

#modified flightplan to move app to var/www (for use with nginx)
remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username}, 'var', 'www', 'etools.natashaosborne.com');

#modified code for flightplan to work with forever
  remote.exec('forever stop ~/'+appName+'/'+startFile, {failsafe: true});
  remote.exec('forever start ~/'+appName+'/'+startFile);
