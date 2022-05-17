class RoomsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stop_all_streams
    room = Room.find(params[:id])
    stream_for room
  end

  # def receive(data)
  #   RoomsChannel.broadcast_to(room, { room: room, users: room.users, messages: room.messages })
  # end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end
end
