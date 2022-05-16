class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :update, :destroy]

  # GET /messages
  def index
    @messages = Message.all

    render json: @messages
  end

  # GET /messages/1
  def show
    render json: @message
  end

  # POST /messages
  def create
    @message = Message.new(message_params)
      room = Room.find(message_params[:room_id])
    if @message.save
      room = @message.room
      ActionCable.server.broadcast("rooms_channel", MessageSerializer.new(@message).as_json)
    else
      render json: @message.errors, status: :unprocessable_entity
    end
    render json: @message, status: :created, location: @message
  end

  # PATCH/PUT /messages/1
  def update
    if @message.update(message_params)
      render json: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messages/1
  def destroy
    @message.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:content, :user_id, :room_id)
    end

    def message_params_create
      params.permit(:content, :user_id, :room_id)
    end
end
