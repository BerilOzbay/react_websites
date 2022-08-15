import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Yazi.css'

function YaziDetay() {
    /*useParams fonksiyonu ile geçerli URL'den anahtar degerler
    dondurulur. */
    const { id } = useParams();
    const [yazi, setYazi] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setYazi(data))
    }, [])


    return (
        <div>
            <div className="containerDetay">
            <img src='/images/2203_w026_n002_1540b_p1_1540.jpg' alt='deneme' className='imgDetay' />
                <h2 className='baslikDetay'>{yazi.title}</h2>
               
                {yazi.body}
                <br/>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, minima obcaecati debitis odit fugiat nihil possimus incidunt facilis ea quia, laboriosam mollitia ut dicta aliquam pariatur quod consequuntur repellendus hic?
                Quod, maiores similique consequatur debitis blanditiis possimus natus architecto accusamus tempora iure deserunt consequuntur quisquam voluptatem assumenda? Consequatur odit nobis, culpa aspernatur sed error debitis possimus cum optio, animi id?
                Doloremque quae soluta deleniti, odit, rem voluptatibus voluptas pariatur, vel ea maiores corrupti optio aspernatur aut amet sit iure distinctio officiis? Nesciunt maiores quaerat accusamus culpa deserunt perferendis aperiam doloremque.
                Animi ipsum fuga voluptate voluptates possimus vero doloremque laudantium, officia dolorem eius facilis itaque laborum deleniti laboriosam numquam quisquam odio pariatur nam, distinctio maiores tempore magni aliquam perspiciatis? Dolorum, omnis.
                Praesentium consequuntur facere quaerat numquam optio nemo enim labore consequatur dicta id libero placeat exercitationem repellat incidunt, pariatur quo temporibus, odio error. Blanditiis quibusdam beatae nihil, molestias excepturi adipisci aliquid.
                Deleniti doloremque omnis quaerat temporibus ipsum impedit quisquam, officia perspiciatis pariatur a, dolores tempore id facere delectus voluptatum illum eos saepe expedita ad nesciunt soluta iure? At facilis ducimus soluta?
                Optio earum, natus dignissimos quibusdam ullam sint omnis. Deleniti, accusamus laborum libero itaque distinctio, facilis voluptatum quidem ad et ducimus, rerum repudiandae. Incidunt id odio nihil quis, magnam animi at?
                Sapiente doloremque molestias accusamus odio repellendus magni neque quaerat, voluptates deserunt amet officiis soluta tempore corporis explicabo ipsa placeat fugit laboriosam, earum vitae. Ex in perferendis rem est accusamus saepe.
                Voluptatem veniam voluptate, assumenda quae esse impedit quo quibusdam reiciendis. Atque ipsa vel asperiores delectus veniam ut? Animi iure dolorum placeat sit expedita, necessitatibus, illum fugiat, quis voluptates culpa veritatis.
                Nobis et nisi similique quia odit modi deserunt, officiis perspiciatis officia fugiat dignissimos eveniet est aspernatur, expedita exercitationem quae! In pariatur eius ut eos? Labore ratione debitis magnam beatae vel?
                Facere, molestias fugiat animi nam deserunt consequuntur dicta autem maiores consequatur vero blanditiis iusto delectus repellat eligendi cupiditate sunt voluptates aliquam saepe tempore optio alias repudiandae pariatur doloribus. Sit, iste?
                Repellendus enim vel repellat mollitia dolor quisquam rerum! Aliquid dolore ipsam atque debitis quod officia at ea minus, deleniti tempore doloremque nisi eaque temporibus assumenda rerum id maiores odio distinctio.
                Placeat ut tempora quae repudiandae iusto commodi quaerat non soluta impedit sit error mollitia veritatis dolores deserunt sed, numquam cum voluptates cumque dolore reprehenderit! Aut quibusdam nulla impedit saepe ipsa!
                Eum asperiores, exercitationem voluptatibus sapiente ullam quia tempore. Animi cum laudantium totam? Labore doloribus dolores dicta nemo quae reprehenderit ea, excepturi quaerat, sed libero ullam? Earum architecto ex placeat libero!
                Amet minima vitae labore repellendus sapiente laudantium, adipisci, rem optio a architecto molestiae quam libero deserunt, non ducimus. Sit at accusantium voluptate. Impedit eligendi, consequatur omnis magnam modi dolorem sint.
                Alias vitae dolores omnis quos qui, illo assumenda nobis laudantium inventore labore deleniti, ex voluptatum quia dolorem. Sapiente, quas? In, animi vero! Dignissimos animi nesciunt illo placeat modi facere culpa?
                Sapiente vel magni quos natus, temporibus ea perferendis incidunt esse dolorum laboriosam recusandae, id nobis corrupti quibusdam laborum consequatur aut. Ullam deleniti quidem voluptates, vel enim earum nobis recusandae ipsam!
                Eos dignissimos nostrum voluptatum! Necessitatibus sint eos, ipsam eveniet et repudiandae assumenda a molestias, officia nam id excepturi fuga recusandae, eligendi saepe numquam totam aspernatur debitis soluta modi qui quo.
                Placeat eveniet commodi culpa obcaecati assumenda tempora officia. Officia quas eaque recusandae accusamus officiis voluptate repellat sit fugit natus dicta quis optio odio corrupti, doloremque vero similique eveniet totam labore.
                Obcaecati eaque quia dolore cumque unde reiciendis nostrum impedit fugiat aliquid corporis possimus laboriosam, numquam totam nam ab tempora placeat nobis dignissimos corrupti distinctio animi velit consequatur sequi! Inventore, est.
                Reprehenderit, corporis perferendis. Neque dolore necessitatibus aliquam porro repudiandae eos, optio nisi beatae quos commodi quod est molestias quasi nobis distinctio consequatur doloremque qui facilis facere quisquam ratione. Quisquam, dolor.
                Nesciunt, animi. Quisquam in soluta, mollitia placeat quibusdam quasi odit dolor aliquam nam laudantium architecto expedita necessitatibus excepturi provident deserunt, voluptates sunt itaque qui. Dolore itaque ullam porro ex inventore.
                Expedita asperiores numquam dignissimos eaque, vel quaerat esse suscipit possimus ducimus atque, modi, itaque iste quidem cumque. Ratione iusto recusandae assumenda eos quasi nesciunt quae odit necessitatibus praesentium, eligendi dolorem.
                Reprehenderit repudiandae dolorem ducimus voluptatibus quis eaque ex cumque pariatur libero itaque vel culpa dolore, explicabo fugit eius aperiam neque at quae ipsa sunt earum velit repellendus? Eligendi, suscipit placeat?
                Quos rerum voluptatem sint ratione totam nemo distinctio cupiditate aliquid repellendus corrupti, inventore, ducimus quaerat animi vitae, odio ab recusandae rem quas aliquam excepturi? Nulla porro eos reiciendis repellat. Modi.
                Error exercitationem iure fugit nobis illo maiores fuga alias dolores aut molestiae deserunt veritatis incidunt suscipit fugiat non sit, doloremque quasi beatae cumque tenetur voluptate, vero quaerat nihil! Voluptas, modi.
                Doloremque repellat vitae nostrum est, distinctio asperiores perspiciatis quam provident soluta obcaecati nihil explicabo architecto laudantium, in minima nobis praesentium doloribus nemo accusamus officiis eaque! Aperiam quod aliquam eaque magnam.
                Harum, quibusdam consequatur deserunt quae eligendi laborum rem ducimus magnam placeat ratione hic doloremque et minus. Illo, consectetur eos? Animi placeat repudiandae asperiores rerum labore sapiente praesentium culpa nisi ipsum!
                Exercitationem non fugit aut odio quod, quaerat quis eos quasi iure saepe magnam sint fugiat corrupti ipsa deserunt autem! Impedit voluptate velit nam magni qui porro architecto asperiores cumque neque.
                Quas neque tempore sint voluptatum ex esse magni! Repellendus vero, quibusdam aut ipsum doloribus aliquid animi ea ipsam, ad exercitationem cum! Quisquam labore illum libero minus. Blanditiis, beatae. Tempora, totam!
                Excepturi voluptatem aliquam corrupti optio, distinctio officia totam doloribus earum voluptate eius, vitae minima adipisci omnis exercitationem recusandae soluta laborum animi esse et dolores, velit obcaecati libero a? Explicabo, excepturi.
                Fugiat deleniti, nesciunt voluptates cupiditate ullam officiis eius consequatur enim repellendus omnis reprehenderit quos corrupti laborum doloribus, totam ad modi debitis perspiciatis! Maxime quas eveniet saepe voluptates magni voluptate quo.
                Ad eos, amet tempora nesciunt sapiente explicabo accusantium maxime voluptates. Saepe minus repudiandae blanditiis modi dicta itaque, architecto dolore distinctio laudantium sunt officiis, sit aliquid fugit autem dolor labore cupiditate.
                Quisquam distinctio voluptatem modi necessitatibus, assumenda culpa ipsum ad libero suscipit maxime adipisci, praesentium doloribus eum minus! Sed rerum atque, asperiores rem repudiandae animi fuga quas necessitatibus, veniam, veritatis error.
                Cumque, maxime natus exercitationem perspiciatis illo itaque repellat harum blanditiis id omnis. Enim, dolor eos labore, sint recusandae adipisci laudantium porro rerum, excepturi qui ea nobis sed incidunt. Dignissimos, officiis.
                Ipsam explicabo neque odit qui dolor, reprehenderit quam quidem laudantium recusandae iusto cupiditate molestias magni doloremque, expedita esse unde fugit, ea perferendis officia quibusdam sint facilis? Assumenda, ut. Laboriosam, possimus!
                Soluta ab tempora doloremque nemo rerum nostrum molestiae atque ipsam? Fuga omnis eius, pariatur quis sapiente ea sunt dolor quidem doloribus sint nobis qui corporis molestiae, consectetur doloremque cum dolore.
                Voluptas vero laborum ut modi eos deleniti distinctio quisquam. Illum, delectus tempora asperiores laudantium nisi eveniet dicta impedit suscipit velit quia, doloribus error vel amet cupiditate, consequuntur maxime voluptatem! Ex.
                Natus nulla rem, in rerum, quam libero dicta reiciendis esse voluptates maiores quibusdam. Architecto, voluptate nulla. Blanditiis ad adipisci ipsa quibusdam. Dicta, labore? Hic architecto ducimus necessitatibus inventore provident officia?
                Quos quia expedita quam ex at minus amet, voluptatum totam laborum repudiandae vero ad labore! Odit et quidem illum vero soluta, maxime itaque ratione sequi exercitationem eligendi iste similique sint.
                Magnam eos, aliquid quos minima accusamus tenetur a eum odit ipsa blanditiis at porro omnis fuga dolores illo laboriosam repellat odio amet. Architecto, natus. Velit voluptas eos doloribus magnam error!
                Dolores nostrum magnam sequi numquam earum minus dignissimos sint voluptatibus facere fuga autem possimus cum esse a odit laborum nisi, nobis sunt totam laudantium mollitia. Quod voluptates inventore ad cum?
                Soluta, facere quas temporibus similique in voluptates dignissimos quod ullam at obcaecati nemo natus. Itaque porro dolores officiis nostrum molestias praesentium, eos maiores sequi sint tempora similique deleniti! Quibusdam, dolore!
                Consectetur, eligendi provident! Rem aperiam reiciendis eligendi similique autem. Ipsum voluptas accusantium cupiditate maiores iusto obcaecati reiciendis perspiciatis saepe ratione quo reprehenderit ab recusandae consequatur modi sed, corrupti dolor laborum?
                Alias eligendi blanditiis rerum nemo, expedita necessitatibus nulla ducimus sed ut eaque asperiores, quaerat dignissimos numquam reiciendis! Voluptatem minus soluta molestias. Sequi nam assumenda, dolorum ratione alias obcaecati dolores inventore.
                Dicta odio eligendi soluta! Itaque iste suscipit architecto ipsam accusamus recusandae, quos dolores eius sed voluptates vitae est. Ipsum earum quibusdam tenetur saepe, tempora delectus doloribus dolorum perspiciatis inventore voluptates?
                Autem vero natus eius in nemo voluptatibus illo earum exercitationem. Expedita, commodi impedit? Quod natus obcaecati fuga dolorum at similique, quae blanditiis, possimus recusandae, officiis modi in eius id saepe.
                Sunt quaerat quo nulla fuga non quos autem consequuntur repellendus totam similique, laborum nesciunt atque eos nisi maxime soluta beatae ipsam suscipit illo iste voluptatibus. Dolorum eius enim incidunt repellat!
                Expedita nisi ab laboriosam corrupti. Nihil ex recusandae optio laudantium itaque officiis cumque libero! Veniam maxime assumenda eaque quas esse et voluptate? Ex enim dolor omnis laboriosam fugiat similique numquam.
                Temporibus, error. Labore numquam expedita laborum eveniet magni? Optio, nostrum! Perspiciatis voluptatum doloribus dolore nisi neque adipisci facilis magni, ab, mollitia placeat aperiam vitae rem corrupti qui facere doloremque? Harum.
                Eaque amet sed nesciunt dolorem debitis expedita doloribus assumenda vitae ipsa placeat odio consectetur quidem quod tempora corrupti nam, quas sunt qui at nihil soluta quam eos? Minus, nesciunt tempora!
                Voluptatibus illum et esse ipsa aliquid! Odio doloribus, dignissimos a soluta nam laborum repellat voluptatum voluptate magnam maiores odit, voluptatem, accusantium ullam hic amet obcaecati modi deleniti rerum officiis molestias!
                Reiciendis, sit non error obcaecati excepturi, saepe magni officia, eaque ad quasi rerum. Tempora veniam nam quos possimus, deleniti ipsa error est consequuntur officiis perspiciatis nulla, cum corrupti eos? Fuga?
                Obcaecati quos officia enim perferendis neque ratione dicta placeat, molestiae exercitationem voluptatum praesentium repellendus. Cumque, accusamus? Laboriosam tempore, exercitationem ad vitae quam alias quibusdam iste soluta mollitia, nisi ab aspernatur.
                Numquam non perspiciatis nesciunt fugit magni beatae molestiae sapiente alias. Quae asperiores harum fugit quos magni, repellat ipsa veniam nesciunt maxime molestiae ipsum incidunt unde itaque cumque corrupti inventore commodi!
                Fugit nihil provident, nisi neque inventore hic est sint ex sit laborum nemo, ratione in quod doloribus. Illum, minus dignissimos? Consequatur blanditiis error repudiandae eum. Recusandae itaque illo ad voluptas?
                Laudantium unde voluptate, et autem quo architecto ipsam doloribus beatae ad! Numquam nulla, at accusamus hic ab omnis, qui accusantium illo, temporibus consequuntur eligendi pariatur dolorum error ipsa nobis nemo?
                Ratione officiis, perferendis excepturi tenetur repellat vero aut reiciendis sit culpa aspernatur quis, nihil autem. Culpa quisquam sit reprehenderit accusantium assumenda? Obcaecati quasi distinctio illo quod nulla unde? Dolorem, earum.
                Culpa nemo ipsam accusantium voluptatem molestias consequatur incidunt provident facilis? Voluptatem consectetur enim in soluta eligendi possimus fugiat, temporibus ullam repellendus doloribus impedit ex cum accusamus voluptatibus! Ullam, deserunt et!
                Doloremque eveniet ipsum iusto aut iste id quas ipsa optio velit architecto dolorem fuga soluta dolorum enim inventore, hic obcaecati asperiores nulla. Quos nostrum sequi natus veritatis nulla sint repellendus.
                Nulla eligendi voluptatibus sit? Aliquam, saepe doloremque distinctio deleniti beatae repudiandae quas fugit sit iusto eligendi aliquid eos eum ea labore vitae praesentium eaque animi sequi dolore tempore harum. Itaque!
                Blanditiis, vero molestias similique, dolore, corporis nam deserunt nobis quis earum non voluptate quisquam obcaecati commodi asperiores iure ad corrupti modi architecto perferendis suscipit nulla fugit iste eaque. Excepturi, nisi.
                Porro mollitia eos voluptatem nam et modi totam nesciunt placeat in beatae odit, molestiae temporibus ut quibusdam id laborum necessitatibus earum excepturi quas! Et placeat vero distinctio, mollitia quis perspiciatis?
                Illo illum enim voluptatem ad deleniti harum perspiciatis placeat blanditiis nobis doloribus possimus quas a, autem quod animi corrupti laborum. Inventore eaque deleniti sint. Eaque dicta enim sed aperiam at.
                Cupiditate illo repellendus reiciendis praesentium quos. Recusandae iusto distinctio eveniet vel sit numquam neque! Voluptate, earum est? Explicabo suscipit reiciendis totam, fugit sed ipsa corporis, soluta porro reprehenderit necessitatibus placeat.
                Porro dicta officiis eius voluptate nobis et labore, voluptatum illo quibusdam omnis libero quasi error ab quisquam, quia doloribus odit repellendus earum inventore quas! Porro eius omnis quas voluptas? Quae!
                Exercitationem id quam sint fuga totam. Consequuntur dolorem omnis, laborum consectetur error autem natus sint nesciunt ex, veniam sequi atque vitae quaerat velit ipsum repellat veritatis amet praesentium numquam nam.
                Voluptate vitae mollitia molestias possimus soluta sequi error asperiores adipisci, veniam quaerat libero quasi culpa consequatur alias dolor itaque! Eveniet nisi quam corporis soluta sed dolor libero magni quia assumenda!
                Voluptas quia deleniti magnam, fugiat enim obcaecati est, aliquam rem nesciunt unde consequatur quaerat iusto assumenda delectus nisi doloremque eum illo id. Enim nihil maxime ea soluta vero temporibus hic!
                Debitis voluptas vitae consectetur, quidem possimus reiciendis veritatis molestias quis ipsa. Ut, sint quasi expedita aperiam dolore quibusdam vitae accusantium officiis modi illum inventore quod tempore nobis repellat voluptate hic?
                Hic ex dolores, deleniti sunt rerum tempore ipsum odio voluptatibus eligendi quibusdam fugiat expedita, laudantium facilis ea omnis labore, quia cupiditate? Distinctio soluta iure minus consectetur perspiciatis dignissimos nobis officiis!
                Minima quisquam, illo alias magni porro voluptatibus inventore voluptas ipsam vel quae molestiae? Itaque soluta reiciendis dolore accusamus incidunt a ut saepe odit hic qui autem deleniti, vitae illum necessitatibus.
                Magni, velit sint hic ex ducimus sapiente sit itaque, laborum optio labore cupiditate ea perspiciatis doloribus, aliquam doloremque accusantium non? Rerum, expedita perspiciatis nemo cumque esse nam voluptatum debitis saepe.
                Sint, mollitia accusantium doloribus possimus architecto eius, ullam qui voluptatem natus ipsa eos, saepe cupiditate magnam fugit soluta! Repellat unde quisquam aperiam error exercitationem at mollitia magnam natus autem voluptates.
                Dignissimos, doloremque. Laboriosam nesciunt ab culpa. Quidem accusamus obcaecati sunt, ullam quisquam eius impedit reprehenderit a deleniti labore dolore! Totam illo voluptatem obcaecati eius molestiae veritatis minus necessitatibus corrupti velit.
                Rem nobis veniam quos fugiat enim eos sed veritatis ea numquam inventore incidunt quidem ex repudiandae itaque quaerat at ipsum, expedita vel tempora necessitatibus sunt doloremque, tenetur ullam. Velit, officiis.
                Rem sequi atque ad fugiat! Repellat commodi itaque ipsa modi. Doloribus, architecto dignissimos dolore explicabo asperiores odio velit vel possimus dicta harum incidunt reiciendis officia ipsa blanditiis enim eveniet quis.
                Debitis eaque accusamus, officiis quisquam nesciunt ullam sit, non aperiam quasi exercitationem id, laudantium ipsam illo reiciendis fuga. Ut esse possimus harum hic quas consequuntur nihil corrupti deleniti veritatis nulla?
                Sapiente labore magnam quam aperiam soluta, aliquid natus quis facere ipsum dicta? Dolore consequatur magni ipsa dolor molestias ratione dolores, quis fugit recusandae doloremque animi quas tenetur nostrum eum tempora.
                Accusamu</p>
            </div>


        </div>
    )
}

export default YaziDetay
