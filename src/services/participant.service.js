const Participant =require("../models/participant.models")

class participantServices{
  static async createPairConversation(data) {
    try {
      const result = await Participant.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = await Participant.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports= participantServices