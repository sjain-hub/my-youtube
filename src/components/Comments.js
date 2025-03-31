import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex my-4  ">
      <img
        className="w-12 h-12 mx-2"
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        alt="zxcv"
      />
      <div>
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ data }) => {
  return data.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="ml-5 pl-5 border-l-2 border-black">
        <CommentList data={comment?.replies} />
      </div>
    </div>
  ));
};

const Comments = () => {
  const dummyData = [
    {
      name: "Shubham Jain",
      text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
      replies: [],
    },
    {
      name: "Shubham Jain",
      text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
      replies: [
        {
          name: "Shubham Jain",
          text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
          replies: [],
        },
        {
          name: "Shubham Jain",
          text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
          replies: [
            {
              name: "Shubham Jain",
              text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
              replies: [],
            },
            {
              name: "Shubham Jain",
              text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
              replies: [
                {
                  name: "Shubham Jain",
                  text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
                  replies: [],
                },
                {
                  name: "Shubham Jain",
                  text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
                  replies: [],
                },
                {
                  name: "Shubham Jain",
                  text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "Shubham Jain",
          text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
          replies: [],
        },
      ],
    },
    {
      name: "Shubham Jain",
      text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
      replies: [],
    },
    {
      name: "Shubham Jain",
      text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
      replies: [],
    },
    {
      name: "Shubham Jain",
      text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
      replies: [],
    },
    {
      name: "Shubham Jain",
      text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
      replies: [],
    },
    {
      name: "Shubham Jain",
      text: "asmd wdhnbqwked qwef erf  rfwegw wefggrgrt rvwrtv wefv thjyt ky hreger theryhryhrt.",
      replies: [],
    },
  ];

  return <div className="my-4">{<CommentList data={dummyData} />}</div>;
};

export default Comments;
