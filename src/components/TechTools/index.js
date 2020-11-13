import React, {useState} from 'react'
import './Tech.css'

const Tech = () => {
    const [modTech, setModTech] = useState([
        {id: 1, value: "devops", isChecked: false, label: 'Devops'},
        {id: 2, value: "qa", isChecked: false, label: 'QA'},
        {id: 3, value: "backend", isChecked: false, label: 'Backend'},
        {id: 4, value: "frontend", isChecked: false, label: 'Frontend'},
        {id: 5, value: "mobile", isChecked: false, label: 'Mobile'},
        {id: 6, value: "pm", isChecked: false, label: 'PM'},
        {id: 7, value: "infra", isChecked: false, label: 'Infrastructure'},
        {id: 8, value: "uiux", isChecked: false, label: 'UI/UX'}
    ])

    const handleChange = (e) => {
        let tech = modTech
        tech.forEach(item => {
            if (item.value === e.target.value){
                item.isChecked = e.target.checked
            }
        })
        setModTech(tech)
    }

    

    const checkItems = modTech.map(item => {
        return (
                <div className='tech-form' key={item.id}>
                    <input id={item.value} type='checkbox' checked={item.checked} value={item.value} onClick={handleChange}/>
                    <label className='item-label' htmlFor={item.value}>{item.label}</label>
                </div>
        )
    })

    return (
        <div className='tech'>
            <h1 className='tech-title'>Technologies & Tools</h1>
            <div className='tech-div'>
                {checkItems}
            </div>
            <div className='technologies'>
                <div className='tech-item devops-ansible devops'>
                    <img src='images/icons/ansible.svg' alt='ansible' />
                    <span>Ansible</span>
                </div>
                <div className='tech-item devops-terraform devops'>
                    <img src='images/icons/terraform.svg' alt='terraform' />
                    <span>Terraform</span>
                </div>
                <div className='tech-item devops-cloud devops'>
                    <img src='images/icons/cloudform.svg' alt='cloudform' />
                    <span>CloudForm..</span>
                </div>
                <div className='tech-item devops-travis devops'>
                    <img src='images/icons/travis.svg' alt='travis' />
                    <span>TravisCI</span>
                </div>
                <div className='tech-item qa-cucumber qa'>
                    <img src='images/icons/cucumber.svg' alt='cucumber' />
                    <span>Cucumber</span>
                </div>
                <div className='tech-item qa-selenium qa'>
                    <img src='images/icons/selenium.svg' alt='selenium' />
                    <span>Selenium</span>
                </div>
                <div className='tech-item qa-jasmine qa'>
                    <img src='images/icons/jasmine.svg' alt='jasmine' />
                    <span>Jasmine</span>
                </div>
                <div className='tech-item qa-pytest qa'>
                    <img src='images/icons/pytest.svg' alt='pytest' />
                    <span>Pytest</span>
                </div>
                <div className='tech-item backend-python backend'>
                    <img src='images/icons/python.svg' alt='python' />
                    <span>Python</span>
                </div>
                <div className='tech-item backend-go backend'>
                    <img src='images/icons/go.svg' alt='go' />
                    <span>Go</span>
                </div>
                <div className='tech-item backend-node backend'>
                    <img src='images/icons/node.svg' alt='node' />
                    <span>Node</span>
                </div>
                <div className='tech-item backend-php backend'>
                    <img src='images/icons/php.svg' alt='php' />
                    <span>PHP</span>
                </div>
                <div className='tech-item frontend-angular frontend'>
                    <img src='images/icons/angular.svg' alt='angular' />
                    <span>Angular</span>
                </div>
                <div className='tech-item frontend-react frontend'>
                    <img src='images/icons/react.svg' alt='react' />
                    <span>React</span>
                </div>
                <div className='tech-item frontend-vue frontend'>
                    <img src='images/icons/vue.svg' alt='vue' />
                    <span>Vue</span>
                </div>
                <div className='tech-item frontend-babel frontend'>
                    <img src='images/icons/babel.svg' alt='babel' />
                    <span>Babel</span>
                </div>
                <div className='tech-item mobile-kotlin mobile'>
                    <img src='images/icons/kotlin.svg' alt='kotlin' />
                    <span>Kotlin</span>
                </div>
                <div className='tech-item mobile-ios mobile'>
                    <img src='images/icons/ios.svg' alt='ios' />
                    <span>IOS</span>
                </div>
                <div className='tech-item mobile-java mobile'>
                    <img src='images/icons/java.svg' alt='java' />
                    <span>Java</span>
                </div>
                <div className='tech-item mobile-swift mobile'>
                    <img src='images/icons/swift.svg' alt='swift' />
                    <span>Swift</span>
                </div>
                <div className='tech-item pm-slack pm'>
                    <img src='images/icons/slack.svg' alt='slack' />
                    <span>Slack</span>
                </div>
                <div className='tech-item pm-jira pm'>
                    <img src='images/icons/jira.svg' alt='jira' />
                    <span>Jira</span>
                </div>
                <div className='tech-item pm-zoom pm'>
                    <img src='images/icons/zoom.svg' alt='zoom' />
                    <span>Zoom</span>
                </div>
                <div className='tech-item pm-notion pm'>
                    <img src='images/icons/notion.svg' alt='notion' />
                    <span>Notion</span>
                </div>
                <div className='tech-item infra-aws infrastructure'>
                    <img src='images/icons/aws.svg' alt='aws' />
                    <span>AWS</span>
                </div>
                <div className='tech-item infra-heroku infrastructure'>
                    <img src='images/icons/heroku.svg' alt='heroku' />
                    <span>Heroku</span>
                </div>
                <div className='tech-item infra-netlify infrastructure'>
                    <img src='images/icons/netlify.svg' alt='netlify' />
                    <span>Netlify</span>
                </div>
                <div className='tech-item infra-azure infrastructure'>
                    <img src='images/icons/azure.svg' alt='azure' />
                    <span>Azure</span>
                </div>
                <div className='tech-item uiux-figma uiux'>
                    <img src='images/icons/figma.svg' alt='figma' />
                    <span>Figma</span>
                </div>
                <div className='tech-item uiux-sketch uiux'>
                    <img src='images/icons/sketch.svg' alt='sketch' />
                    <span>Sketch</span>
                </div>
                <div className='tech-item uiux-invision uiux'>
                    <img src='images/icons/invision.svg' alt='invision' />
                    <span>InVision</span>
                </div>
                <div className='tech-item uiux-zeplin uiux'>
                    <img src='images/icons/zeplin.svg' alt='zeplin' />
                    <span>Zeplin</span>
                </div>
            </div>
        </div>
    )
}

export default Tech