module.exports = class ChannelEvent {
    constructor (name, channel) {
        this.name = name;
        this.channel = channel;
    }

    publish (message) {
        this.channel.publish(message, this.name);
    }

    subscribe (member) {
        this.channel.subscribe(member, [this.name]);
    }

    unsubscribe (member) {
        this.channel.unsubscribe(member, [this.name]);
    }
};
