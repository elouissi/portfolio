"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion"
import { usePortfolio } from "@/components/PortfolioProvider"

const info = [
    {
        icon: <FaPhoneAlt />,
        titre: 'telephone',
        description: '(+212) 7150-29272'
    },
    {
        icon: <FaEnvelope />,
        titre: 'Email',
        description: 'yassinelouissi67@gmail.com'
    },
    {
        icon: <FaMapMarkedAlt />,
        titre: 'adresse',
        description: 'Hay Mohamadi Unite 1 NO 114 Marrakech'
    },
]

const Contact = () => {
    const { t, language } = usePortfolio()
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleServiceChange = (value) => {
        setFormData(prev => ({
            ...prev,
            service: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const templateParams = {
                to_email: 'yassinelouissi67@gmail.com',
                from_name: `${formData.nom} ${formData.prenom}`,
                from_email: formData.email,
                phone: formData.phone,
                service: formData.service,
                message: formData.message
            }

            await emailjs.send(
                'service_9qatp9n', // Remplacez par votre Service ID
                'template_ynrkafa', // Remplacez par votre Template ID
                templateParams,
                'kDjI6D2CGky8LVDgW' // Remplacez par votre Public Key
            )

            alert('Message envoyé avec succès!')
            setFormData({
                nom: '',
                prenom: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            })
        } catch (error) {
            console.error('Erreur:', error)
            alert('Erreur lors de l&#39;envoi du message')
        }
        setLoading(false)
    }

    return (
        <motion.section 
            initial={{ opacity: 0 }} 
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }} 
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="theme-panel flex flex-col gap-6 rounded-xl border p-10">
                            <h3 className="text-4xl text-accent">{t.contactTitle}</h3>
                            <p className="muted-copy">{t.contactIntro}</p>                            <div className="grid grid-cols md:grid-cols-2 gap-6">
                                <Input 
                                    type="text" 
                                    name="nom" 
                                    placeholder={t.name} 
                                    value={formData.nom}
                                    onChange={handleChange}
                                />
                                <Input 
                                    type="text" 
                                    name="prenom" 
                                    placeholder={t.firstName} 
                                    value={formData.prenom}
                                    onChange={handleChange}
                                />
                                <Input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder={t.phone} 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <Select onValueChange={handleServiceChange} value={formData.service}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder={t.selectService}/> 
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>{t.selectService}</SelectLabel>
                                        <SelectItem value="web">{t.serviceItems[0].title}</SelectItem>
                                        <SelectItem value="ui">{t.serviceItems[1].title}</SelectItem>
                                        <SelectItem value="logo">{language === "ar" ? "تصميم الشعار" : language === "en" ? "Logo design" : "Design de logo"}</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea 
                                className="h-[200px]" 
                                name="message"
                                placeholder={t.messagePlaceholder} 
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <Button 
                                type="submit" 
                                size="md" 
                                className="w-[200px] h-[40px]"
                                disabled={loading}
                            >
                                {loading ? t.sending : t.send}
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center justify-center order-1 xl:oder-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] theme-panel text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="muted-copy">{item.titre}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
