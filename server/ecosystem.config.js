module.exports = {
    apps: [{
        name: 'Ecommerce-server-side',
        script: 'app.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-52-14-209-49.us-east-2.compute.amazonaws.com',
            key: '~/.ssh/Ecommerce.pem',
            ref: 'origin/master',
            repo: 'https://sarsky123:oasis123@bitbucket.org/sarsky123/ecommerce-serverside.git',
            path: '/home/ubuntu/server',
            'post-deploy': 'npm install && npm rebuild && pm2 startOrRestart ecosystem.config.js'
        }
    }
}