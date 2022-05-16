class RoomsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stop_all_streams
    # room = Room.find(params[:id])
    stream_from "room_channel"
  end

  def receive(data)
    ActionCable.server.broadcast("room_#{params[:id]}", data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end
end
