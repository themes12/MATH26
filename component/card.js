Vue.component('qcard', {
    template: 
    `
    <div class="d-flex justify-content-center">
        <div class="col-md-6">
            <div class="card card-image" style="background-color: #4285F4; margin-top: 15px;">
                <div class="text-white text-center d-flex align-items-center py-3 px-4">
                    <div>
                        <h3 class="card-title pt-2">
                            <strong>โจทย์</strong>
                        </h3>
                        <p id="question">{{question}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
});
