# linuxproject
<p>A nodejs express app for tracking calories and strength gains. Future description to come.</p>

<h3>##Grunt commands##</h3>
<h4>#[production]</h4>
<p>grunt</p>
<p>#runs default tasks 'concat', 'uglify', 'cssmin', including require.js</p>

<p>#Be sure to comment/uncomment the appropriate concat command [dev or production]</p>
<p>#concast less files to concat.less</p>

<h4>#dev</h4>
<p>grunt dev</p>
<p>#runs the above commands, with +1 = 'watch'</p>

<h3>##Package.json##</h3>
<p># converts concat.less >> build/styles.css</p>
<p>npm run lesscon</p> 

<p># this will browserify the concat client-side js('grunt' default will concat js files)</p>
<p>npm run build</p>

<h3>##flightplan.js##</h3>

<p>fly production</p>
<p>fly dev</p>

<p>#modified flightplan to move app to var/www (for use with nginx)</p>
<p>remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username}, 'var', 'www', 'etools.natashaosborne.com');</p>

<p>#modified code for flightplan to work with forever</p>
<p>remote.exec('forever stop ~/'+appName+'/'+startFile, {failsafe: true});</p>
<p>remote.exec('forever start ~/'+appName+'/'+startFile);</p>
