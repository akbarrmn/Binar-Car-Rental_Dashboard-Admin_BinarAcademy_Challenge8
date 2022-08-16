import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Button, Col,Row, Form, FormGroup, Input, Label } from 'reactstrap'
import './editcar.scss'
import { useDispatch, useSelector } from 'react-redux';
import { doc, updateDoc, serverTimestamp, setDoc } from "firebase/firestore";
import {db, storage} from '../../../../firebase'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { fetchDataDetail } from '../../../../redux/actions/carsAction';

const EditCar = () => {
  const [name, setName] = useState("");
  const [category, setCategory ] = useState("");
  const [passengers, setPassengers] = useState("");
  const [engine, setEngine] = useState("");
  const [price, setPrice] = useState("");
  const [startRent, setStartRent] = useState("");
  const [finishRent, setFinishRent] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState("");
  const [precentage, setPrecentage] = useState(null);

  let { id } = useParams();
  const dispatch = useDispatch()
  const details = useSelector((state) => state.detail)
  const navigate = useNavigate()

  const data = {
    name: name || details.name,
    category : category || details.category,
    passengers : passengers || details.passengers,
    fuel : engine || details.fuel,
    price : price || details.price,
    startRent: startRent || details.startRent,
    finishRent: finishRent || details.finishRent,
    image : url || details.image,
    updateAt: serverTimestamp()
  }
  
  const updateData = async () =>{
    const ref = doc(db, "cars", id);
    await updateDoc(ref, {
      data
    })
    navigate('/admin/cars')
  }

  useEffect(() => {
    if (id && id !== "") dispatch(fetchDataDetail(id))

    const uploadFile = () =>{
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPrecentage(progress)
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
          });
        }
      )
    }

    file && uploadFile() 
  
  }, [file]);
  return (
    <div className="editCar">
      <div className="breadCrumb mt-3">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/admin/cars' style={{ textDecoration:'none' }}>
              Cars
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem >
            <Link to='/admin/cars' style={{ textDecoration:'none' }}>
              List Car
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Edit Car
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <h2>Edit Car</h2>
      <div className="formAdmin mt-4">
        <Row>
          <Col md={8}>
            <div className="formCreate">
              <Form>
                <FormGroup row>
                  <Label
                    for="name"
                    sm={2}
                  >
                    Nama
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      onChange={(e)=>setName(e.target.value)}
                      defaultValue={details.name}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="Kategori"
                    sm={2}
                  >
                    Kategori
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="exampleSelect2"
                      name="select"
                      type="select"
                      onChange={(e)=>setCategory(e.target.value)}
                    >
                      <option defaultValue='Small'>
                        Small
                      </option>
                      <option defaultValue='Medium'>
                        Medium
                      </option>
                      <option defaultValue='Large'>
                        Large
                      </option>
                    </Input>

                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="passenger"
                    sm={2}
                  >
                    Penumpang
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="exampleSelect2"
                      name="passenger"
                      type="select"
                      onChange={(e)=>setPassengers(e.target.value)}
                    >
                      <option defaultValue=''>
                        Pilih Penumpang
                      </option>
                      <option value='2'>
                        2 Orang
                      </option>
                      <option value='4'>
                        4 Orang
                      </option>
                      <option value='8'>
                        8 Orang
                      </option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="fuel"
                    sm={2}
                  >
                    Mesin
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="fuel"
                      name="fuel"
                      type="text"
                      onChange={(e)=>setEngine(e.target.value)}
                      defaultValue={details.fuel}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="price"
                    sm={2}
                  >
                    Harga
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      defaultValue={details.price}
                      onChange={(e)=>setPrice(e.target.value)}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="exampleFile"
                    sm={2}
                  >
                    Foto
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="exampleFile"
                      name="file"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="Kategori"
                    sm={2}
                  >
                    Start Rent
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="Rent"
                      name="Rent"
                      type="date"
                      onChange={(e)=>setStartRent(e.target.value)}
                      defaultValue={details.startRent}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="finish"
                    sm={2}
                  >
                    Finish Rent
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="finish"
                      name="finish"
                      type="date"
                      onChange={(e)=>setFinishRent(e.target.value)}
                      defaultValue={details.finishRent}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="createat"
                    sm={2}
                  >
                    Created at
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="createat"
                      name="createat"
                      type="date"
                      hidden
                    />-
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="updateat"
                    sm={2}
                  >
                    Update at
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="updateat"
                      name="updateat"
                      type="date"
                      hidden
                    />-
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </Col>
          <Col md={4}>
            <div className="foto d-flex">
              <h3 className='text-center'>Image Preview</h3>
              <img
                width={300}
                height={300}
                src={
                  file
                    ? URL.createObjectURL(file)
                    : details.image
                }
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>
        <div className="buttonCars mt-5">
          <Link to='/admin/cars'>
            <Button className='btn cancel'>
              Cancel
            </Button>
          </Link>
          <Button disabled={ precentage !== null && precentage < 100 } onClick={updateData} className='btn ms-3 save'>
            Save
          </Button>
        </div>
    </div>
  )
}

export default EditCar