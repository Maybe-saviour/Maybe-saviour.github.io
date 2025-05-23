<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- 联系我们 -->
      <div class="footer-section contact">
        <h3>联系我们</h3>
        <p><i class="fas fa-envelope"></i> Email: <a href="mailto:contact@example.com">1043301296@qq.com</a></p>
        <p><i class="fas fa-phone-alt"></i> Phone: 15881585232 / 18306337764</p>
        <p><i class="fas fa-map-marker-alt"></i> Address: Jianyang City, Chengdu, Sichuan Province Geely College (Chengdu Campus)</p>
      </div>

      <!-- 放置 Logo -->
      <div class="footer-logo">
        <!-- 使用正确的路径 -->
        <img src="@/assets/logo.jpg" alt="Logo" />
      </div>

      <!-- 客户服务 -->
      <div class="footer-section service">
        <h3>客户服务</h3>
        <div class="service-links">
          <div class="link-row">
            <router-link to="/AppHome">首页</router-link>
            <router-link to="/ServiceIntroduction">服务介绍</router-link>
            <router-link to="/SuccessStories">成功案例</router-link>
          </div>
          <div class="link-row">
            <router-link to="/AboutUs">关于我们</router-link>
            <router-link to="/NewsThing">新闻动态</router-link>
            <router-link to="/ContactUs">联系我们</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部版权 -->
    <div class="footer-bottom">
      <p>&copy; 2024 流量涡轮 | <a href="#" @click.prevent="showModal('privacy')">隐私政策</a> | <a href="#" @click.prevent="showModal('terms')">服务条款</a></p>
      <p>所有权利保留。</p>
    </div>

    <!-- 隐私政策模态窗口 -->
    <div v-if="showPrivacyModal" class="modal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h2>隐私政策</h2>
        <p>尊敬的用户：</p>
        <p>我们深知您的隐私对于您至关重要，同时也深知我们肩负着保护您隐私的重任。因此，我们特此向您郑重承诺，严格遵守相关法律法规，全力保障您的个人信息安全。以下是我们的隐私政策详细内容：</p>
        
        <h3>一、信息的收集</h3>
        <p>当您在本网站注册账号时，我们会收集您的<strong>用户名、密码、电子邮箱</strong>等基本信息，以便为您创建账户并进行身份验证。</p>
        <p>在您使用本网站的相关服务过程中，我们可能会收集您的<strong>设备信息</strong>（如设备型号、操作系统版本、IP 地址等）、<strong>浏览记录</strong>、<strong>搜索历史</strong>等，以便为您提供个性化的服务和优化网站体验。</p>
        <p>若您选择参与本网站的营销活动、问卷调查等互动项目，您所提供的<strong>姓名、电话号码、地址</strong>等信息将被我们收集，仅用于活动相关目的，如奖品发放、活动通知等。</p>
        
        <h3>二、信息的使用</h3>
        <p>我们将您的个人信息用于为您提供本网站的各项服务，包括但不限于信息展示、内容推荐、在线交易等。我们会根据您的浏览历史和兴趣偏好，向您推荐可能感兴趣的产品、服务或资讯，以提升您的使用体验。</p>
        <p>为保障本网站的正常运行和维护，我们可能会利用收集到的信息进行系统分析、故障排查等工作。同时，我们会对用户数据进行统计分析，以评估网站的整体使用情况和趋势，为我们的业务发展提供决策依据，但这些统计分析结果将仅以匿名化、聚合化的方式呈现，不会泄露您的个人身份信息。</p>
        <p>在符合法律法规及监管要求的前提下，我们可能会与第三方合作伙伴共享您的部分信息，以便他们为您提供更优质的服务。例如，我们会与物流配送公司共享您的收货地址和订单信息，以确保商品能够准确无误地送达您手中；我们也会与支付机构共享您的支付相关信息，以完成交易结算流程。但我们只会共享必要的信息，并且会要求第三方合作伙伴严格遵守我们的隐私政策，采取相应的安全措施来保护您的个人信息。</p>
        
        <h3>三、信息的保护</h3>
        <p>我们已采取合理的物理、技术和管理等多重安全防护措施，以防止您的个人信息被未经授权的访问、披露、篡改或损坏。例如，我们采用了加密技术对您的敏感信息进行加密存储和传输；我们建立了严格的信息访问权限控制体系，只有经过授权的员工才能在必要的情况下访问您的个人信息；我们还会定期进行安全审计和漏洞扫描，及时发现并修复潜在的安全风险。</p>
        <p>尽管我们采取了上述安全措施，但请您理解，没有任何一种互联网安全措施是绝对安全无虞的。因此，我们强烈建议您采取积极的安全防护措施，如设置复杂的账号密码、定期更换密码、不向他人泄露您的账号信息等，以共同维护您的个人信息安全。</p>
        
        <h3>四、信息的共享、转让和披露</h3>
        <p>除本隐私政策已明确说明的情况外，我们不会向其他任何第三方共享、转让或披露您的个人信息，除非获得您的明确同意或授权。</p>
        <p>根据法律法规、法律程序、政府要求或司法机关的强制要求，我们可能需要共享、转让或披露您的个人信息。在这种情况下，我们会严格按照相关法律规定和要求执行，并在合法的范围内尽可能保护您的合法权益。</p>
        <p>随着本网站业务的持续发展，我们可能会进行合并、收购、资产转让等商业活动。在这些情况下，您的个人信息可能会被转移给相关第三方。但我们会要求新的信息接收方继续遵守本隐私政策的规定，否则我们将要求其重新获取您的明确同意。</p>
        
        <h3>五、您的权利</h3>
        <p>您有权随时访问、更正、删除您的个人信息。您可以通过登录您的账户，在“个人中心”或相关设置页面进行操作。如果您发现我们收集、存储的您的个人信息有错误或不完整之处，您可以要求我们进行更正或补充。如果您希望删除您的个人信息，您也可以向我们提出申请，但请注意，部分信息可能因法律法规规定或业务需要而无法删除，我们会向您说明具体情况。</p>
        <p>您有权撤回您对我们收集和使用您个人信息的同意。您可以通过修改账户设置或向我们发送书面通知的方式，撤回您的同意。一旦您撤回同意，我们将停止收集和使用相应的个人信息，但该决定不会影响此前基于您的同意已进行的信息收集和使用活动的合法性。</p>
        
        <h3>六、未成年人信息保护</h3>
        <p>我们非常重视对未成年人个人信息的保护。本网站仅面向成年人提供服务，如果您是未满 18 周岁的未成年人，请在您的父母或法定监护人的陪同和指导下使用本网站。如果您是未成年人的父母或法定监护人，当您发现未成年人在未经您同意的情况下向我们提供了个人信息，请及时联系我们，我们会采取措施删除相关信息。</p>
        
        <h3>七、隐私政策的更新</h3>
        <p>我们可能会根据法律法规的变化、业务的发展或网站功能的调整，适时对本隐私政策进行更新。当隐私政策发生重大变更时，我们会在本网站的显著位置发布更新后的隐私政策，并注明生效日期。如果您继续使用本网站的服务，即表示您已充分阅读、理解并接受更新后的隐私政策。</p>
        
        <h3>八、联系我们</h3>
        <p>如果您对本隐私政策有任何疑问、意见或建议，或您认为您的个人信息权益受到了侵害，请通过以下方式与我们联系：</p>
        <p>[公司名称]：流量涡轮</p>
        <p>[公司地址]：四川省成都市</p>
        <p>[联系电话]：</p>
        <p>[电子邮箱]：</p>
        <p>我们将竭诚为您服务，并在合理的期限内回复您的问题和诉求。</p>
        <p>感谢您对本网站的信任与支持！</p>
        <p>[发布日期]：2025年5月7日</p>
      </div>
    </div>

    <!-- 服务条款模态窗口 -->
    <div v-if="showTermsModal" class="modal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h2>服务条款</h2>
        <p>尊敬的用户：</p>
        <p>欢迎使用本网站！在您使用本网站的各项服务之前，请您仔细阅读并充分理解以下服务条款。一旦您开始使用本网站的任何服务，即表示您已完全同意并遵守本服务条款的所有规定。如果您不同意本服务条款的任何内容，请您立即停止使用本网站。</p>
        
        <h3>一、账户注册与使用</h3>
        <p><strong>您在使用本网站的部分服务时，可能需要注册一个账户。</strong> 在注册过程中，您应按照本网站的要求提供真实、准确、完整和最新的个人信息。如果您提供虚假、过时或不完整的信息，我们有权暂停或终止您的账户，并拒绝您使用本网站的服务。</p>
        <p><strong>您应对您的账户和密码的安全性负责，并妥善保管您的账户信息。</strong> 任何通过您的账户进行的操作（包括但不限于发布信息、购买商品、发表评论等）均视为您的行为，您应承担由此产生的一切责任和后果。如果您发现您的账户存在安全漏洞或被他人未经授权使用的情况，请您立即通知我们，并采取有效的措施（如修改密码等）来保护您的账户安全。</p>
        <p>每个账户仅供您个人使用，未经本网站书面同意，您不得以任何形式将您的账户转让、出租、出借或与他人共享。</p>
        
        <h3>二、网站内容的使用</h3>
        <p><strong>本网站提供的所有内容（包括但不限于文字、图片、音频、视频、软件、商标、标识等）均受相关法律法规的保护，拥有知识产权。</strong> 未经本网站或相关权利人明确书面授权，您不得对本网站内容进行复制、修改、出租、出借、出售、传播、创作衍生作品或用于任何商业目的。</p>
        <p>您可以为了个人学习、研究或欣赏的目的合理使用本网站的内容，但应在使用范围内注明内容的来源和作者。如果您需要在本网站之外使用本网站的内容，您应事先取得本网站或相关权利人的许可，并按照许可的要求使用内容。</p>
        
        <h3>三、用户行为规范</h3>
        <p>您在使用本网站的过程中，应遵守法律法规、社会公德和本服务条款的规定，不得从事任何违法、违规或违反本服务条款的行为。包括但不限于：</p>
        <ul>
          <li>发布、传播含有反动、恐怖主义、色情、暴力、恐怖、血腥、侮辱、诽谤、淫秽、侵犯他人隐私、商业诽谤、虚假信息等违法或不良信息的内容；</li>
          <li>进行任何可能对本网站的网络、服务器、系统功能等造成损害或干扰的行为，如恶意攻击、分布式拒绝服务攻击（DDoS）、植入恶意软件等；</li>
          <li>利用本网站进行任何商业活动或广告宣传，未经本网站书面同意；</li>
          <li>未经本网站许可，收集、抓取本网站的用户信息、数据或其他内容；</li>
          <li>其他违反法律法规或本服务条款的行为。</li>
        </ul>
        <p><strong>如果您违反上述规定，本网站有权采取相应的措施，包括但不限于警告、限制使用、暂停服务、终止服务、删除违规内容、追究法律责任等。</strong> 同时，您应承担因您的违法行为或违规行为给本网站或第三方造成的全部损失。</p>
        
        <h3>四、服务的变更、中断和终止</h3>
        <p>本网站保留随时变更、中断或终止部分或全部服务的权利。对于服务的变更、中断或终止，本网站将尽力提前通知您，但由于不可抗力、技术故障、紧急维护等原因导致的服务变更、中断或终止，本网站不承担任何责任。</p>
        <p>如因您的违反法律法规或本服务条款的行为导致本网站终止服务的，本网站有权将您的账户信息、交易记录等相关数据予以删除或保留，并有权向您追究由此造成的一切损失。</p>
        
        <h3>五、免责声明</h3>
        <p>本网站尽力确保本网站内容的准确性和完整性，但本网站不对本网站内容的准确性、完整性、可靠性、时效性等作出任何保证或承诺。<strong>本网站上的信息仅作为一般参考信息，不构成任何形式的建议（包括但不限于投资建议、商业决策建议等）。</strong> 您应对依据本网站内容所做出的任何决策自行承担风险。</p>
        <p>本网站可能包含第三方网站的链接，这些链接仅为方便您获取更多信息而提供。<strong>本网站不对第三方网站的内容、产品或服务进行控制、监督或保证，您访问第三方网站时应自行承担风险。</strong> 同时，本网站对第三方网站的隐私政策和信息安全措施也不承担任何责任。</p>
        <p><strong>在任何情况下，本网站及其关联公司、董事、员工、代理人等不对因使用本网站或无法使用本网站而产生的直接、间接、偶然、特殊及后续的损害或损失（包括但不限于利润损失、数据丢失、业务中断等）承担任何责任，</strong> 即使本网站已被告知此类损害或损失的可能性。</p>
        
        <h3>六、法律适用与争议解决</h3>
        <p>本服务条款的订立、执行和解释均适用中华人民共和国法律（不包括香港、澳门特别行政区及台湾地区的法律）。</p>
        <p>如您与本网站就本服务条款或本网站服务的使用发生任何争议，双方应首先友好协商解决；协商不成的，任何一方均有权将争议提交至本网站运营方所在地有管辖权的人民法院通过诉讼方式解决。</p>
        
        <h3>七、其他条款</h3>
        <p>如果本服务条款的任何条款被认定为无效或不可执行，该条款将在最大可执行的范围内执行，其余条款仍然有效。</p>
        <p>本服务条款的标题仅为方便阅读而设置，不应影响条款内容的解释。</p>
        <p>本网站保留对本服务条款的最终解释权。</p>
        <p>感谢您使用本网站！如果您对本服务条款有任何疑问，请通过以下方式与我们联系：</p>
        <p>[公司名称]：流量涡轮</p>
        <p>[公司地址]：四川省成都市简阳市 吉利学院(成都校区)</p>
        <p>[联系电话]：15881585232/18306337764</p>
        <p>[电子邮箱]：1043301296@qq.com</p>
        <p>[发布日期]：2025年5月7日</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      showPrivacyModal: false,
      showTermsModal: false
    };
  },
  methods: {
    showModal(type) {
      if (type === 'privacy') {
        this.showPrivacyModal = true;
      } else if (type === 'terms') {
        this.showTermsModal = true;
      }
    },
    closeModal() {
      this.showPrivacyModal = false;
      this.showTermsModal = false;
    }
  }
};
</script>

<style lang="scss">
/* 页脚基础样式 */
.footer {
  background-color: #121212;
  color: white;
  padding: 50px 20px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.footer-section {
  width: 30%;
}

.footer-section h3 {
  font-size: 1.5rem;
  color: #00bcd4;
  margin-bottom: 15px;
}

.footer-section p {
  font-size: 1rem;
  margin: 5px 0;
}

.footer-section a {
  color: #bbb;
  text-decoration: none;
}

.footer-section a:hover {
  color: #00bcd4;
}

/* 客户服务链接布局 */
.service-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link-row {
  display: flex;
  justify-content: space-between;
}

.link-row a {
  color: #bbb;
  font-size: 1rem;
  width: 30%;
  text-align: center;
}

.link-row a:hover {
  color: #00bcd4;
}

/* Logo 中心部分 */
.footer-logo {
  text-align: center;
  width: 30%;
}

.footer-logo img {
  max-width: 150px; /* 设置 logo 的最大宽度 */
  width: 100%;  /* 使图片自适应宽度 */
  margin: 20px auto;
}

/* 分割线样式 */
.divider {
  height: 1px;
  background-color: #444;
  margin: 20px 0;
}

/* 底部版权样式 */
.footer-bottom {
  text-align: center;
  margin-top: 30px;
  border-top: 1px solid #444;
  padding-top: 15px;
}

.footer-bottom p {
  font-size: 1rem;
  color: #bbb;
}

.footer-bottom a {
  color: #00bcd4;
  text-decoration: none;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

/* 模态窗口样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  width: 80%;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  color: #333;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

/* 响应式 */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .footer-logo {
    margin: 20px 0;
  }

  .link-row {
    flex-direction: column;
  }
}
</style>