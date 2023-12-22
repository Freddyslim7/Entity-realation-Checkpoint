const mongoose = require('mongoose');

const PostModel = mongoose.model(
    
    'datagym',

    {
        data_gym : [ 
            
            {
                info_gym : [
                    {
                        name_gym : {
                            type : String,
                            require : true 
                        },

                        address_gym : {
                            type : String,
                            require : true
                        },
        
                        number_gym : {
                            type : Number,
                            require : true
                        }
                    }
                ],


                info_members : [ 
                    {
                        id : {
                            type : Number,
                            require : true
                        },

                        name: {
                            type : String,
                            require : true
                        },

                        address : {
                            type : String,
                            require : true
                        },

                        date_naissance : {
                            type : Number,
                            require : true
                        },

                        sex : {
                            type : String,
                            require : true 
                        }
                    }
                ],


                info_session : [
                    {
                        type_sport : {
                            type : String,
                            require : true
                        },

                        Schedule : {
                            type : Date,
                            default : Date.now,
                        },

                        nbr_members : {
                            type : Number,
                            require : true
                        }
                    }
                ],


                info_coach : [
                    {
                        nbr_coach : {
                            type : Number,
                            require : true
                        },
                        
                        firstname_coach : {
                            type : String,
                            require : true
                        },

                        lastname_coach : {
                            type : String,
                            require : true
                        },

                        age_coach : {
                            type : Number,
                            require : true
                        },

                        specialist_coach : {
                            type : String,
                            require : true
                        }
                    }
                ]

            }
        ]

    },

  
    'datalist'
)

module.exports = PostModel;