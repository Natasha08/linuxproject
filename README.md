# linuxproject
<p>A nodejs express app for tracking calories and strength gains. Future description to come.</p>

<h2>##Grunt commands##</h2>
<h3>#[production]</h3>
<p>grunt</p>
<h3>#runs default tasks 'concat', 'uglify', 'cssmin', including require.js</h3>

<h3>#Be sure to comment/uncomment the appropriate concat command [dev or production]</h3>
<h3>#concast less files to concat.less</h3>

<h3>#dev</h3>
<p>grunt dev</p>
<h3>#runs the above commands, with +1 = 'watch'</h3>

<h2>##Package.json##</h2>
<h3># converts concat.less >> build/styles.css</h3>
<p>npm run lesscon</p> 

<h3># this will browserify the concat client-side js('grunt' default will concat js files)</h3>
<p>npm run build</p>

<h2>##flightplan.js##</h2>

<p>fly production</p>
<p>fly dev</p>

<h3>#modified flightplan to move app to var/www (for use with nginx)</h3>
<p>remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username}, 'var', 'www', 'etools.natashaosborne.com');</p>

<h3>#modified code for flightplan to work with forever</h3>
<p>remote.exec('forever stop ~/'+appName+'/'+startFile, {failsafe: true});</p>
<p>remote.exec('forever start ~/'+appName+'/'+startFile);</p>
