import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData, 
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = 
        `
            Nombre: ${formData.name}
            Correo electrónico: ${formData.email}
            Comentarios: ${formData.feedback}
            Rating: ${formData.rating}
        `;
        const isConfirmed = window.confirm(`Por favor confirma tus detalles:\n\n${confirmationMessage}`);

        if (isConfirmed) {
            console.log('Enviando comentarios:', formData);
            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating: ''
            });
            alert('¡Gracias por tus valiosos comentarios!');
        }
    }

    return (
        <>
            <nav>
                Tell Us What You Think
            </nav>
            <form className="feedback-form" onSubmit={handleSubmit}>
                <h2>We'd Love to Hear From You!</h2>
                <p>Please share your feedback with us.</p>
                <input type="text" name='name' placeholder='Tu nombre' value={formData.name} onChange={handleChange}/>
                <input type="email" name="email" id="email" placeholder='Tu correo electrónico' value={formData.email} onChange={handleChange}/>
                <textarea name="feedback" id="feedback" cols="30" rows="10" placeholder='Tu retroalimentación' value={formData.feedback} onChange={handleChange}></textarea>
                
                {/* Corrección en el grupo de radio buttons */}
                <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}> 
                    Califícanos:
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value="5" 
                            checked={formData.rating === '5'} 
                            onChange={handleChange} 
                        /> 5
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value="4" 
                            checked={formData.rating === '4'} 
                            onChange={handleChange} 
                        /> 4
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value="3" 
                            checked={formData.rating === '3'} 
                            onChange={handleChange} 
                        /> 3
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value="2" 
                            checked={formData.rating === '2'} 
                            onChange={handleChange} 
                        /> 2
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value="1" 
                            checked={formData.rating === '1'} 
                            onChange={handleChange} 
                        /> 1
                    </label>
                </div>

                <button type='submit'>Enviar Feedback</button>
            </form>
        </>
    );
};

export default FeedbackForm;