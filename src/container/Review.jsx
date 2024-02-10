import React, { useState } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import '../styles/Review.css'
import reviewer from './images/user-placeholder.png'
import star from './images/icon-star.svg'
import { product } from '../../data'

const ReviewSchema = Yup.object().shape({
  headline: Yup.string().required('Please write a headline'),
  writtenReview: Yup.string().required('Please enter your review'),
})

const Review = () => {
  const { reviews } = product
  const [showForm, setShowForm] = useState(false)
  const [allReviews, setAllReviews] = useState(reviews)

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star-filled' : 'star-empty'}>
          <img src={star} alt={`Star ${i}`} />
        </span>
      )
    }
    return stars
  }

  const handleFormSubmit = (values, { resetForm }) => {
    const newReview = {
      user: 'Some random guy',
      ...values,
    }
    setAllReviews([...allReviews, newReview])
    resetForm()
    setShowForm(false)
  }

  return (
    <div>
      <div className="topper">
        <h1>Customer Reviews</h1>
        <button className="reviewBtn" onClick={() => setShowForm(true)}>
          Write A Review
        </button>
      </div>
      {showForm && (
        <Formik
          initialValues={{ headline: '', writtenReview: '', starRating: 5 }}
          validationSchema={ReviewSchema}
          onSubmit={handleFormSubmit}
        >
          <Form className="review-form">
            <label>
              Headline:
              <Field type="text" name="headline" />
              <ErrorMessage name="headline" component="div" className="error-message" />
            </label>
            <label>
              Written Review:
              <Field as="textarea" name="writtenReview" />
              <ErrorMessage name="writtenReview" component="div" className="error-message" />
            </label>
            <label>
              Star Rating:
              <Field type="number" name="starRating" min="1" max="5" />
            </label>
            <button type="submit">Add Review</button>
          </Form>
        </Formik>
      )}
      {allReviews.map((review, index) => (
        <div key={index} className="product-container">
          <div className="reviewer">
            <img src={reviewer} alt="Reviewer" />
          </div>
          <div className="product-details">
            <h2>{review.user}</h2>
            <div className="rating">{renderStars(review.starRating)}</div>
            <h2>{review.headline}</h2>
            <p>{review.writtenReview}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Review
