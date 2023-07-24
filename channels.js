const Channel = require('./channel.js');

module.exports = class ChannelManager {
    constructor (name) {
        this.channels = new Map();
    }

    channel (name) {
        if (false === this.channels.has(name)) {
            this.channels.set(name, new Channel(name, this));
        }
        return this.channels.get(name);
    }

    remove (name) {
        this.channels.delete(name);
    }

    unsubscribe (member) {
        this.channels.forEach((channel) => {
            channel.unsubscribe(member);
        });
    }

    subs (member) {
        const subs = {};
        this.channels.forEach((channel) => {
            subs[channel.name] = channel.subs(member); 
        });
        return subs;
    }
}; 
