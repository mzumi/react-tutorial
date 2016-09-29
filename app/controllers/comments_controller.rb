class CommentsController < ApplicationController
  def index
    render json: Comment.all
  end
  
  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: Comment.all
    else
      redirect_to root_url
    end   
  end
  
  private 
  
  def comment_params
    params.require(:comment).permit(:author, :text)
  end
end