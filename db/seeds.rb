# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "john", password: "123" , email: "john@gmail.com" ,image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Rubens_apostel_johannes_grt.jpg/1200px-Rubens_apostel_johannes_grt.jpg",)
user2 = User.create(username: "peter",password: "1234", email: "peter@gmail.com" ,image: "data:image/jpeg;base64,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",)
user3 = User.create(username: "mathew",password: "12345", email: "mathew@gmail.com", image: "https://pbs.twimg.com/profile_images/1111718438752260096/az-rZVMj_400x400.jpg",)

workspace1 = Workspace.create(name: "book-of-john", user_id: user1.id)
workspace2 = Workspace.create(name: "book-of-peter", user_id: user2.id)
workspace3 = Workspace.create(name: "book-of-mathew", user_id: user3.id)


<<<<<<< HEAD
=======

>>>>>>> parent of e4a6fc04 (got the messaginng to work)
invitation1 = Invitation.create( user_id: user1.id,workspace_id: workspace2.id)
invitation2 = Invitation.create( user_id: user1.id,workspace_id: workspace3.id)
invitation3 = Invitation.create( user_id: user2.id,workspace_id: workspace1.id)
invitation4 = Invitation.create( user_id: user2.id,workspace_id: workspace3.id)
invitation5 = Invitation.create( user_id: user3.id,workspace_id: workspace1.id)
invitation6 = Invitation.create( user_id: user3.id,workspace_id: workspace2.id)




room1 = Room.create(name: "chapter-1" ,workspace_id: workspace1.id)
room2 = Room.create(name: "chapter-2", workspace_id: workspace1.id)
room3 = Room.create(name: "chapter-3", workspace_id: workspace1.id)
room4  = Room.create(name: "chapter-4", workspace_id: workspace1.id)
room5 = Room.create(name: "chapter-5", workspace_id: workspace1.id)
room6 = Room.create(name: "chapter-6", workspace_id: workspace1.id)
room7 = Room.create(name: "chapter-7", workspace_id: workspace1.id)
room8 = Room.create(name: "chapter-8", workspace_id: workspace1.id)
room9 = Room.create(name: "chapter-9", workspace_id: workspace1.id)
room10 = Room.create(name: "chapter-10", workspace_id: workspace1.id)

room11 = Room.create(name: "chapter-11", workspace_id: workspace2.id)
room12 = Room.create(name: "chapter-12", workspace_id: workspace2.id)
room13 = Room.create(name: "chapter-13", workspace_id: workspace2.id)
room14 = Room.create(name: "chapter-14", workspace_id: workspace2.id)
room15 = Room.create(name: "chapter-15", workspace_id: workspace2.id)
room16 = Room.create(name: "chapter-16", workspace_id: workspace2.id)
room17 = Room.create(name: "chapter-17", workspace_id: workspace2.id)
room18 = Room.create(name: "chapter-18", workspace_id: workspace2.id)
room19 = Room.create(name: "chapter-19", workspace_id: workspace2.id)
room20 = Room.create(name: "chapter-20", workspace_id: workspace2.id)

room21 = Room.create(name: "chapter21", workspace_id: workspace3.id )
room22 = Room.create(name: "chapter22", workspace_id: workspace3.id )
room23 = Room.create(name: "chapter23", workspace_id: workspace3.id )
room24 = Room.create(name: "chapter24", workspace_id: workspace3.id )
room25 = Room.create(name: "chapter25", workspace_id: workspace3.id )
room26 = Room.create(name: "chapter26", workspace_id: workspace3.id )
room27 = Room.create(name: "chapter27", workspace_id: workspace3.id )
room28 = Room.create(name: "chapter28", workspace_id: workspace3.id )
room29 = Room.create(name: "chapter29", workspace_id: workspace3.id )
room30 = Room.create(name: "chapter230", workspace_id: workspace3.id )

#all in room with id of 1
message1 = Message.create(content: "A bird does not sing because it has an answer. It sings because it has a song.", room_id: room1.id, user_id: user1.id)
message2 = Message.create(content: "It is the creative potential itself in human beings that is the image of God.", room_id: room1.id, user_id: user2.id)
message3 = Message.create(content: "But in the end one needs more courage to live than to kill himself..", room_id: room1.id, user_id: user3.id)
message4 = Message.create(content: "A little government and a little luck are necessary in life, but only a fool trusts either of them.", room_id: room1.id, user_id: user2.id)
message5 = Message.create(content: "Why do you have to be a nonconformist like everybody else?", room_id: room1.id, user_id: user1.id)

#all in room with id of 15
message6 = Message.create(content: "Let us so live that when we come to die even the undertaker will be sorry.", room_id: room15.id, user_id: user1.id)
message7 = Message.create(content: "The capacity of human beings to bore one another seems to be vastly greater than that of any other animal.", room_id: room15.id, user_id: user2.id)
message8 = Message.create(content: "We may not imagine how our lives could be more frustrating and complex--but Congress can.", room_id: room15.id, user_id: user2.id)
message9 = Message.create(content: "It is impossible to travel faster than the speed of light, and certainly not desirable, as one's hat keeps blowing off.", room_id: room15.id, user_id: user1.id)
message10 = Message.create(content: "When a thought is too weak to be expressed simply, it should be rejected.", room_id: room15.id, user_id: user3.id)
message11 = Message.create(content: "Invention is the mother of necessity.", room_id: room15.id, user_id: user2.id)

#all in room with id of 26
message12 = Message.create(content: "Before he sets out, the traveler must possess fixed interests and facilities to be served by travel.", room_id: room26.id, user_id: user2.id)
message13 = Message.create(content: "The great tragedy of Science - the slaying of a beautiful hypothesis by an ugly fact.", room_id: room26.id, user_id: user3.id)
message14 = Message.create(content: "Associate yourself with men of good quality if you esteem your own reputation for 'tis better to be alone than in bad company.", room_id: room26.id, user_id: user2.id)
message15 = Message.create(content: "Happiness makes up in height for what it lacks in length.", room_id: room26.id, user_id: user1.id)
message16 = Message.create(content: "One remembers horrors, I think, for the rest of one's life, but memories do not always remain so sharp, and with time, and new circumstance, do not affect us so powerfully.", room_id: room26.id, user_id: user1.id)
message17 = Message.create(content: "Psychiatry enables us to correct our faults by confessing our parents' shortcomings.", room_id: room26.id, user_id: user3.id)