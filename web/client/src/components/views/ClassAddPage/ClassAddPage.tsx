import React, { ReactElement, useRef, useState } from "react";
import "../../css/ProjectAddPage.css";
import { useDispatch } from "react-redux";
import {
  projectCreate,
  findEmail,
  myInfo,
  python2,
} from "../../../_actions/user_action";
import { Button, Modal } from "react-bootstrap";
import image from "../../images/image.png";
import text from "../../images/text.png";
import close from "../../images/close.png";
import square from "../../images/square.png";
import { useEffect } from "react";
import "../../css/ClassAddPage.css";
import { python } from "../../../_actions/user_action";
import { VoiceID } from "aws-sdk";
import { addListener } from "process";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";

/*프로젝트 생성 modal 버튼을 구현해주는 파일*/
interface props {
  show: boolean;
  onHide: () => void; // 함수 타입 정의할 때 }
  nextId: number;
  projectId: any;
  fileImage2: any;
}

// let bodys = {
//   tokens : token
// }
// console.log("바디",bodys)
// 로그인 되어 있는 사람의 토큰값

// if(email_user===null){
// dispatch(findEmail(bodys))
//    .then((response: { payload: { Success: any; email : any}; }) => {
//      if(response.payload.Success) {
//          setemail_user(response.payload.email.toString())
//      }
//      else {
//        alert(token)
//      }
//    })}

const ClassAddPage = (props: props): ReactElement => {
  const { show, onHide, nextId, fileImage2, projectId } = props;

  const [x, setX] = useState();
  const dispatch = useDispatch<any>();

  let classData: any[] = [];
  const names = [
    "person",
    "bicycle",
    "car",
    "motorcycle",
    "airplane",
    "bus",
    "train",
    "truck",
    "boat",
    "traffic light",
    "fire hydrant",
    "stop sign",
    "parking meter",
    "bench",
    "bird",
    "cat",
    "dog",
    "horse",
    "sheep",
    "cow",
    "elephant",
    "bear",
    "zebra",
    "giraffe",
    "backpack",
    "umbrella",
    "handbag",
    "tie",
    "suitcase",
    "frisbee",
    "skis",
    "snowboard",
    "sports ball",
    "kite",
    "baseball bat",
    "baseball glove",
    "skateboard",
    "surfboard",
    "tennis racket",
    "bottle",
    "wine glass",
    "cup",
    "fork",
    "knife",
    "spoon",
    "bowl",
    "banana",
    "apple",
    "sandwich",
    "orange",
    "broccoli",
    "carrot",
    "hot dog",
    "pizza",
    "donut",
    "cake",
    "chair",
    "couch",
    "potted plant",
    "bed",
    "dining table",
    "toilet",
    "tv",
    "laptop",
    "mouse",
    "remote",
    "keyboard",
    "cell phone",
    "microwave",
    "oven",
    "toaster",
    "sink",
    "refrigerator",
    "book",
    "clock",
    "vase",
    "scissors",
    "teddy bear",
    "hair drier",
    "toothbrush",
  ];
  //스포츠,동물,전제자품,음식,가구,교통,의류,주방용품,생활용품,이동수단

  const mobility = [
    { id: 1, name: "bicycle" },
    { id: 2, name: "car" },
    { id: 3, name: "motorcycle" },
    { id: 4, name: "airplane" },
    { id: 5, name: "bus" },
    { id: 6, name: "train" },
    { id: 7, name: "truck" },
    { id: 8, name: "boat" },
  ];

  const traffic = [
    { id: 9, name: "traffic right" },
    { id: 11, name: "stop sign" },
    { id: 12, name: "parking meter" },
  ];

  const creatrue = [
    { id: 0, name: "person" },
    { id: 14, name: "bird" },
    { id: 15, name: "cat" },
    { id: 16, name: "dog" },
    { id: 17, name: "horse" },
    { id: 18, name: "sheep" },
    { id: 19, name: "cow" },
    { id: 20, name: "elephant" },
    { id: 21, name: "bear" },
    { id: 22, name: "zebra" },
    { id: 23, name: "giraffe" },
    { id: 58, name: "potted plant" },
  ];

  const furniture = [
    { id: 13, name: "bench" },
    { id: 59, name: "bed" },
    { id: 60, name: "dining table" },
    { id: 61, name: "toilet" },
    { id: 71, name: "sink" },
  ];

  const fashion = [
    { id: 24, name: "backpack" },
    { id: 26, name: "handbag" },
    { id: 27, name: "tie" },
    { id: 28, name: "suitcase" },
    { id: 56, name: "chair" },
    { id: 57, name: "couch" },
  ];

  const misc = [
    { id: 25, name: "umbrella" },
    { id: 29, name: "frisbee" },
    { id: 33, name: "kite" },
    { id: 73, name: "book" },
    { id: 74, name: "clock" },
    { id: 75, name: "vase" },
    { id: 76, name: "scissors" },
    { id: 77, name: "teddy bear" },
    { id: 79, name: "toothbrush" },
  ];

  const sports = [
    { id: 30, name: "skis" },
    { id: 31, name: "snowboard" },
    { id: 32, name: "sports ball" },
    { id: 34, name: "baseball bat" },
    { id: 35, name: "baseball glove" },
    { id: 36, name: "skateboard" },
    { id: 37, name: "surfboard" },
    { id: 38, name: "tennis racket" },
  ];

  const living = [
    { id: 39, name: "bottle" },
    { id: 40, name: "wine glass" },
    { id: 41, name: "cup" },
    { id: 42, name: "fork" },
    { id: 43, name: "knife" },
    { id: 44, name: "spoon" },
    { id: 45, name: "bowl" },
  ];

  const food = [
    { id: 46, name: "banana" },
    { id: 47, name: "apple" },
    { id: 48, name: "sandwich" },
    { id: 49, name: "orange" },
    { id: 50, name: "broccoli" },
    { id: 51, name: "carrot" },
    { id: 52, name: "hot dog" },
    { id: 53, name: "pizza" },
    { id: 54, name: "donut" },
    { id: 55, name: "cake" },
  ];

  const electronics = [
    { id: 62, name: "tv" },
    { id: 63, name: "laptop" },
    { id: 64, name: "mouse" },
    { id: 65, name: "remote" },
    { id: 66, name: "keyboard" },
    { id: 67, name: "cell_phone" },
    { id: 68, name: "microwave" },
    { id: 69, name: "oven" },
    { id: 70, name: "toaster" },
    { id: 72, name: "refrigerator" },
    { id: 74, name: "hair drier" },
  ];

  const sedan = [{ id: 0, name: "Grendeur" }];

  const hatchback = [
    { id: 1, name: "Morning" },
    { id: 2, name: "Ray" },
    { id: 5, name: "spark" },
  ];

  for (let i = 0; i < names.length; i++) {
    classData.push({ id: i, name: names[i] });
  }

  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const [checkedItems, setCheckedItems] = useState(new Set());
  const [checkedItems2, setCheckedItems2] = useState(new Set());

  const [indexes, setIndexes] = useState<any>([]);
  const [indexes2, setIndexes2] = useState<any>([]);
  const [percent, setPercent] = useState<number>();

  const checkedItemHandler = (
    box: any,
    id: any,
    isChecked: any,
    index: any
  ) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
      console.log("체크 눌림", checkedItems);
      setIndexes(indexes.concat(index));
      box.style.backgroundColor = "#F6CB44";
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
      console.log("체크 안눌림", checkedItems);
      // setIndexes(indexes.concat(index));
      for (let i = 0; i < indexes.length; i++) {
        if (indexes[i] === index) {
          indexes.splice(i, 1);
          i--;
        }
      }
      box.style.backgroundColor = "#fff";
    }
    return checkedItems;
  };
  const checkHandler = ({ target }: any) => {
    setIsChecked(!isChecked);
    checkedItemHandler(
      target.parentNode,
      target.value,
      target.checked,
      target.id
    );

    console.log(target.parentNode, target.value, target.checked, target.id);
    console.log(checkedItems);
  };

  const checkedItemHandler2 = (
    box: any,
    id: any,
    isChecked2: any,
    index2: any
  ) => {
    if (isChecked2) {
      checkedItems2.add(id);
      setCheckedItems2(checkedItems2);
      console.log("체크 눌림", checkedItems2);
      setIndexes2(indexes2.concat(index2));
      box.style.backgroundColor = "#F6CB44";
    } else if (!isChecked2 && checkedItems2.has(id)) {
      checkedItems2.delete(id);
      setCheckedItems2(checkedItems2);
      console.log("체크 안눌림", checkedItems);
      // setIndexes(indexes.concat(index));
      for (let i = 0; i < indexes2.length; i++) {
        if (indexes2[i] === index2) {
          indexes2.splice(i, 1);
          i--;
        }
      }
      box.style.backgroundColor = "#fff";
    }
    return checkedItems2;
  };
  const checkHandler2 = ({ target }: any) => {
    setIsChecked2(!isChecked2);
    checkedItemHandler2(
      target.parentNode,
      target.value,
      target.checked,
      target.id
    );

    console.log(target.parentNode, target.value, target.checked, target.id);
    console.log(checkedItems);
  };

  const onChangeRadio = (e: any) => {
    console.log(e.target.value);
    setX(e.target.value);
    if (x == 1) {
      //document.getElementById('pop1').style.display="inline-block";
    }
  };

  const pythonClick = () => {
    console.log(fileImage2 + "file2");
    console.log(indexes + "index");
    const spin = document.getElementsByClassName(
      "spin_show"
    ) as HTMLCollectionOf<HTMLElement>;
    const assign = document.getElementsByClassName(
      "ai_assign_btn"
    ) as HTMLCollectionOf<HTMLElement>;
    assign[0].style.display = "none";
    spin[0].style.display = "block";
    fileImage2.map((data: any) => {
      let body = {
        data: data,
        projectId: projectId,
        index: indexes,
      };

      setPercent(40);
      dispatch(python(body)).then(
        (response: { payload: { pythons: String; index: any } }) => {
          console.log("python_index", response.payload.index);
          assign[0].style.display = "block";
          spin[0].style.display = "none";
        }
      );
    });
  };
  const pythonClick2 = () => {
    console.log(fileImage2 + "file2");
    console.log(indexes2 + "index");
    const spin = document.getElementsByClassName(
      "spin_show"
    ) as HTMLCollectionOf<HTMLElement>;
    const assign = document.getElementsByClassName(
      "ai_assign_btn"
    ) as HTMLCollectionOf<HTMLElement>;
    assign[0].style.display = "none";
    spin[0].style.display = "block";
    fileImage2.map((data: any) => {
      let body = {
        data: data,
        projectId: projectId,
        index: indexes2,
      };

      setPercent(40);
      dispatch(python2(body)).then(
        (response: { payload: { pythons: String; index: any } }) => {
          console.log("python_index", response.payload.index);
          assign[0].style.display = "block";
          spin[0].style.display = "none";
        }
      );
    });
  };

  const [visible, setVisible] = useState(false);

  const onClickVisible = (e: any) => {
    const cat = document.getElementsByClassName(
      e
    ) as HTMLCollectionOf<HTMLElement>;

    if (visible == false) {
      cat[0].style.display = "block";
      setVisible(true);
      console.log(visible);
    } else if (visible == true) {
      cat[0].style.display = "none";
      setVisible(false);
      console.log(visible);
    }
  };

  return (
    <Modal
      className="clsModal"
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable={true}
      centered
    >
      <Modal.Body className="classModal">
        <li className="class_subject">기본 AI 선택</li>
        <div className="AICa">
          {/*<input className="ChAI" type="radio" value="1" checked={x == "1"} onClick={onClickVisible} onChange={onChangeRadio}></input>
               <label> default preset </label>
               </div>
               <div className="AICa"> 
              <input className="ChAI" type="radio" value="2" checked={x == "2"} onChange={onChangeRadio}></input>
  <label>사용자 정의 AI</label>*/}
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>이동수단</Accordion.Header>
            <Accordion.Body>
              <div id="pop1" className="choClass1">
                {mobility.map((item: any) => (
                  <label key={item.id} className="innerBox">
                    <input
                      id={item.id}
                      className="clsCheck"
                      type="checkbox"
                      value={item.name}
                      onChange={(e) => checkHandler(e)}
                    />
                    <div className="classfont">{item.name}</div>
                  </label>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header> 스포츠</Accordion.Header>
            <Accordion.Body>
              <div id="pop1" className="choClass2">
                {sports.map((item: any) => (
                  <label key={item.id} className="innerBox">
                    <input
                      id={item.id}
                      className="clsCheck"
                      type="checkbox"
                      value={item.name}
                      onChange={(e) => checkHandler(e)}
                    />
                    <div className="classfont">{item.name}</div>
                  </label>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>교통수단</Accordion.Header>
            <Accordion.Body>
              <div id="pop1" className="choClass3">
                {traffic.map((item: any) => (
                  <label key={item.id} className="innerBox">
                    <input
                      id={item.id}
                      className="clsCheck"
                      type="checkbox"
                      value={item.name}
                      onChange={(e) => checkHandler(e)}
                    />
                    <div className="classfont">{item.name}</div>
                  </label>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>가구</Accordion.Header>
            <Accordion.Body>
              <div id="pop1" className="choClass4">
                {furniture.map((item: any) => (
                  <label key={item.id} className="innerBox">
                    <input
                      id={item.id}
                      className="clsCheck"
                      type="checkbox"
                      value={item.name}
                      onChange={(e) => checkHandler(e)}
                    />
                    <div className="classfont">{item.name}</div>
                  </label>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>생물</Accordion.Header>
            <Accordion.Body>
              <div id="pop1" className="choClass5">
                {creatrue.map((item: any) => (
                  <label key={item.id} className="innerBox">
                    <input
                      id={item.id}
                      className="clsCheck"
                      type="checkbox"
                      value={item.name}
                      onChange={(e) => checkHandler(e)}
                    />
                    <div className="classfont">{item.name}</div>
                  </label>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>의류</Accordion.Header>
            <Accordion.Body>
              <div id="pop1" className="choClass5">
                {creatrue.map((item: any) => (
                  <label key={item.id} className="innerBox">
                    <input
                      id={item.id}
                      className="clsCheck"
                      type="checkbox"
                      value={item.name}
                      onChange={(e) => checkHandler(e)}
                    />
                    <div className="classfont">{item.name}</div>
                  </label>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>생활용품</Accordion.Header>
            <Accordion.Body>
              <div id="pop1" className="choClass7">
                {living.map((item: any) => (
                  <label key={item.id} className="innerBox">
                    <input
                      id={item.id}
                      className="clsCheck"
                      type="checkbox"
                      value={item.name}
                      onChange={(e) => checkHandler(e)}
                    />
                    <div className="classfont">{item.name}</div>
                  </label>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>음식</Accordion.Header>
            <Accordion.Body>
              <div id="pop1" className="choClass8">
                {food.map((item: any) => (
                  <label key={item.id} className="innerBox">
                    <input
                      id={item.id}
                      className="clsCheck"
                      type="checkbox"
                      value={item.name}
                      onChange={(e) => checkHandler(e)}
                    />
                    <div className="classfont">{item.name}</div>
                  </label>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>전자제품</Accordion.Header>
            <Accordion.Body>
              <div id="pop1" className="choClass9">
                {electronics.map((item: any) => (
                  <label key={item.id} className="innerBox">
                    <input
                      id={item.id}
                      className="clsCheck"
                      type="checkbox"
                      value={item.name}
                      onChange={(e) => checkHandler(e)}
                    />
                    <div className="classfont">{item.name}</div>
                  </label>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>기타</Accordion.Header>
            <Accordion.Body>
              <div id="pop1" className="choClass10">
                {misc.map((item: any) => (
                  <label key={item.id} className="innerBox">
                    <input
                      id={item.id}
                      className="clsCheck"
                      type="checkbox"
                      value={item.name}
                      onChange={(e) => checkHandler(e)}
                    />
                    <div className="classfont">{item.name}</div>
                  </label>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <li className="class_subject">
          커스텀 AI 선택
          <Accordion>
            <Accordion.Item eventKey="10">
              <Accordion.Header>세단</Accordion.Header>
              <Accordion.Body>
                <div id="pop1" className="choClass1">
                  {sedan.map((item: any) => (
                    <label key={item.id} className="innerBox">
                      <input
                        id={item.id}
                        className="clsCheck"
                        type="checkbox"
                        value={item.name}
                        onChange={(e) => checkHandler2(e)}
                      />
                      <div className="classfont">{item.name}</div>
                    </label>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="11">
              <Accordion.Header>해치백</Accordion.Header>
              <Accordion.Body>
                <div id="pop1" className="choClass1">
                  {hatchback.map((item: any) => (
                    <label key={item.id} className="innerBox">
                      <input
                        id={item.id}
                        className="clsCheck"
                        type="checkbox"
                        value={item.name}
                        onChange={(e) => checkHandler2(e)}
                      />
                      <div className="classfont">{item.name}</div>
                    </label>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <Accordion>
            <Accordion.Item eventKey="10">
              <Accordion.Header>해치백</Accordion.Header>
              <Accordion.Body>
                <div id="pop1" className="choClass1">
                  {mobility.map((item: any) => (
                    <label key={item.id} className="innerBox">
                      <input
                        id={item.id}
                        className="clsCheck"
                        type="checkbox"
                        value={item.name}
                        onChange={(e) => checkHandler(e)}
                      />
                      <div className="classfont">{item.name}</div>
                    </label>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}
        </li>
      </Modal.Body>
      <Modal.Footer>
        <button className="ai_assign_btn" onClick={pythonClick}>
          기본 AI 할당
        </button>
        <Spinner className="spin_show" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <button className="ai_assign_btn" onClick={pythonClick2}>
          커스텀 AI 할당
        </button>
        <Spinner className="spin_show" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Modal.Footer>
    </Modal>
  );
};

export default ClassAddPage;
