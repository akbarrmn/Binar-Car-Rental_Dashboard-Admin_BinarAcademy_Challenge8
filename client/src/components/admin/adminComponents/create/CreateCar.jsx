import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Button, Col, Form, FormGroup, Input, Label, Modal, Row } from 'reactstrap'
import './CreateCar.scss'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {db, storage} from '../../../../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Data } from '../../../../App';

const CreateCar = () => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory ] = useState("");
  const [passengers, setPassengers] = useState("");
  const [engine, setEngine] = useState("");
  const [price, setPrice] = useState("");
  const [startRent, setStartRent] = useState("");
  const [finishRent, setFinishRent] = useState("");
  const [url, setUrl] = useState("");
  const [precentage, setPrecentage] = useState(null);

  const navigate = useNavigate()

  const { message, setMessage} = useContext(Data);    

  const data = {
    name: name,
    category : category,
    passengers : passengers,
    fuel : engine,
    price : price,
    startRent: startRent,
    finishRent: finishRent,
    image : url,
    createAt: serverTimestamp(),
    updateAt: serverTimestamp()
  }
  
  const handleCreate = async (e) =>{
    e.preventDefault()
    try {
        await addDoc(collection(db, "cars"), {
          data
      }).then(
        setMessage('Data Berhasil Ditambah'),
        setTimeout(() => {
          navigate('/admin/cars')
        }, 2000)
      )  
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(() => {
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
      );
    }

    file && uploadFile()
  }, [file]);
  return (
    <div className="createCar">
      <div className="breadCrumb mt-3">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/admin/cars' style={{ textDecoration: 'none' }}>
              Cars
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem >
            <Link to='/admin/cars' style={{ textDecoration: 'none' }}>
              List Car
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Add New Car
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <h2>Add New Car</h2>
      <h5 className={message? 'notif' : ''}>{message}</h5>
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
                      required
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
                      required
                    >
                      <option defaultValue='' hidden>
                        Pilih Kategori
                      </option>
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
                      required
                    >
                      <option defaultValue='' hidden>
                        Pilih Penumpang
                      </option>
                      <option value={2}>
                        2 Orang
                      </option>
                      <option value={4}>
                        4 Orang
                      </option>
                      <option value={8}>
                        8 Orang
                      </option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="Kategori"
                    sm={2}
                  >
                    Mesin
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="Kategori"
                      name="kategori"
                      type="text"
                      onChange={(e)=>setEngine(e.target.value)}
                      required
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
                      required
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
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="Rent"
                    sm={2}
                  >
                    Finish Rent
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="Rent"
                      name="Rent"
                      type="date"
                      onChange={(e)=>setFinishRent(e.target.value)}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="Rent"
                    sm={2}
                  >
                    Created at
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="Rent"
                      name="Rent"
                      type="date"
                      hidden
                    />-
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="Rent"
                    sm={2}
                  >
                    Update at
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="Rent"
                      name="Rent"
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
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
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
        <Button className='btn ms-3 save' disabled={ precentage !== null && precentage < 100 } onClick={handleCreate}>
          Save
        </Button>
      </div>
    </div>
  )
}

export default CreateCar