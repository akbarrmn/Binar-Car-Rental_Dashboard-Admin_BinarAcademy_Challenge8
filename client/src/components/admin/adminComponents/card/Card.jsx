import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Breadcrumb, BreadcrumbItem, Card, CardText, Button, CardImg, Row, Col } from 'reactstrap'
import { MdOutlinePeopleAlt, MdSettings, MdDateRange } from "react-icons/md";
import './Card.scss';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { fetchData } from '../../../../redux/actions/carsAction';
import { db } from '../../../../firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import { Data } from '../../../../App';

const CardCars = () => {
    const carsSearch = useSelector((state) => state.carsFilter.carsSearch)
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    const dispatch = useDispatch()
    const { setMessage } = React.useContext(Data);

    const handleMessage = () => {
        setMessage('')
    }

    const handleDelete = async(id) => {
        try{
          await deleteDoc(doc(db, "cars" , id));
          dispatch(fetchData(carsSearch.filter((item) => item.id !== id)))
        }catch(err){
          console.log(err)
        }
      }
    
    return (
        <>
            <div className="cardCars">
                <div className="breadCrumb mt-3">
                    <Breadcrumb>
                        <BreadcrumbItem>
                        <Link to='/admin/cars' style={{ textDecoration:'none' }}>
                            Cars
                        </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            List Car
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="create mt-3 d-flex justify-content-between">
                    <h2>List Car</h2>
                    <Link to='/admin/add-cars'>
                        <Button style={{ backgroundColor:'#0D28A6', marginRight:'2rem' }} onClick={handleMessage}> 
                            + Add New Car
                        </Button>
                    </Link>
                </div>
                <div className="filterCars">
                    <Button className='filter me-2'>
                        All
                    </Button>
                    <Button className='filter mx-2'>
                        Small
                    </Button>
                    <Button className='filter mx-2'>
                        Medium
                    </Button>
                    <Button className='filter mx-2'>
                        Large
                    </Button>
                </div>
                <div className='cardList mt-3' style={{ padding:'0 2rem 2rem 2rem' }}>
                    <Row>
                        {carsSearch.length === 0 && <div><h4 className='text-center mt-5'>Data Kosong</h4></div>}
                        {carsSearch.map((item) => {
                            return (
                                <Col xl="4" md='6' sm='12' className='mt-3'>
                                    <Card className='cars-cards' id={item.id} >
                                        <div className='card-wrap w-100'>
                                            <div >
                                                <CardImg
                                                    alt="Card image"
                                                    src={item.image}
                                                    style={{ maxHeight:'314px', minHeight:'314px', objectFit:'contain' }}
                                                />
                                            </div>
                                            <div className="card-item">
                                                <CardText>
                                                    <p className='mb-2'>{item.name} / {item.category}</p>
                                                    <h5>{formatter.format(item.price)} / hari </h5>
                                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, porro voluptas aut dolorum eveniet repellat?</p>
                                                    <div>
                                                        <MdOutlinePeopleAlt />
                                                        <span className='ms-2'>{item.passengers} Orang</span>
                                                    </div>
                                                    <div >
                                                        <MdSettings />
                                                        <span className='ms-2'>{item.fuel}</span>
                                                    </div>
                                                    <div >
                                                        <MdDateRange />
                                                        <span className='ms-2'>Tahun {item.startRent}</span>
                                                    </div>
                                                </CardText>
                                                <div className="buttonCard">
                                                    <Button className='btn btn-danger delete' onClick={()=>handleDelete(item.id)}>
                                                        <DeleteIcon/>Delete
                                                    </Button>
                                                     <Link to={`/admin/update/${item.id}`}>
                                                        <Button className='btn btn-success edit'>
                                                            <EditIcon/>Edit
                                                        </Button>
                                                     </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>     
                        )})
                        }
                    </Row>
                </div>
            </div>
        </>
  )
}

export default CardCars