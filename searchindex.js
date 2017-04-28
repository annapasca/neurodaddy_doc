Search.setIndex({envversion:46,filenames:["cinq/cinq","ephypype/includeme","ephypype/neuropype_ephy","ephypype/neuropype_ephy.interfaces","ephypype/neuropype_ephy.interfaces.mne","ephypype/neuropype_ephy.nodes","ephypype/neuropype_ephy.pipelines","ephypype/pipelines/nodes/inv_solution","ephypype/pipelines/preproc_meeg","ephypype/pipelines/source_reconstruction","ephypype/pipelines/spectral_connectivity","examples/conn_graph_example","examples/epoch_example","examples/examples","examples/inv_example","examples/params","examples/preproc_example","graphpype/coclass","graphpype/conmat_to_graph","graphpype/correl_mat","graphpype/graph_stats","graphpype/includeme","graphpype/index","graphpype/intmat_to_graph","graphpype/modularity","graphpype/nii_to_conmat","graphpype/plot_igraph","graphpype/radatools","index"],objects:{"neuropype_ephy.aux_tools":{nostdout:[2,3,1,""],suppress_stdout_stderr:[2,1,1,""]},"neuropype_ephy.compute_fwd_problem":{compute_fwd_sol:[2,3,1,""]},"neuropype_ephy.compute_inv_problem":{compute_ROIs_inv_sol:[2,3,1,""],compute_noise_cov:[2,3,1,""],read_noise_cov:[2,3,1,""]},"neuropype_ephy.fif2ts":{ep2ts:[2,3,1,""]},"neuropype_ephy.import_ctf":{convert_ds_to_raw_fif:[2,3,1,""]},"neuropype_ephy.interfaces":{mne:[4,0,0,"-"]},"neuropype_ephy.interfaces.mne":{Inverse_solution:[4,0,0,"-"],LF_computation:[4,0,0,"-"],power:[4,0,0,"-"],preproc:[4,0,0,"-"],spectral:[4,0,0,"-"]},"neuropype_ephy.interfaces.mne.Inverse_solution":{InverseSolution:[4,1,1,""],NoiseCovariance:[4,1,1,""]},"neuropype_ephy.interfaces.mne.LF_computation":{LFComputation:[4,1,1,""]},"neuropype_ephy.interfaces.mne.power":{Power:[4,1,1,""]},"neuropype_ephy.interfaces.mne.preproc":{CompIca:[4,1,1,""],CompIcaInputSpec:[4,1,1,""],CompIcaOutputSpec:[4,1,1,""],CreateEp:[4,1,1,""],CreateEpInputSpec:[4,1,1,""],CreateEpOutputSpec:[4,1,1,""],PreprocFif:[4,1,1,""],PreprocFifInputSpec:[4,1,1,""],PreprocFifOutputSpec:[4,1,1,""]},"neuropype_ephy.interfaces.mne.preproc.CompIca":{input_spec:[4,2,1,""],output_spec:[4,2,1,""]},"neuropype_ephy.interfaces.mne.preproc.CreateEp":{input_spec:[4,2,1,""],output_spec:[4,2,1,""]},"neuropype_ephy.interfaces.mne.preproc.PreprocFif":{input_spec:[4,2,1,""],output_spec:[4,2,1,""]},"neuropype_ephy.interfaces.mne.spectral":{PlotSpectralConn:[4,1,1,""],SpectralConn:[4,1,1,""]},"neuropype_ephy.nodes":{import_data:[5,0,0,"-"],ts_tools:[5,0,0,"-"]},"neuropype_ephy.nodes.import_data":{ConvertDs2Fif:[5,1,1,""],ConvertDs2FifInputSpec:[5,1,1,""],ConvertDs2FifOutputSpec:[5,1,1,""],Ep2ts:[5,1,1,""],Ep2tsInputSpec:[5,1,1,""],Ep2tsOutputSpec:[5,1,1,""],ImportBrainVisionAscii:[5,1,1,""],ImportBrainVisionAsciiOutputSpec:[5,1,1,""],ImportMat:[5,1,1,""],ImportMatInputSpec:[5,1,1,""],ImportMatOutputSpec:[5,1,1,""]},"neuropype_ephy.nodes.import_data.ConvertDs2Fif":{input_spec:[5,2,1,""],output_spec:[5,2,1,""]},"neuropype_ephy.nodes.import_data.Ep2ts":{input_spec:[5,2,1,""],output_spec:[5,2,1,""]},"neuropype_ephy.nodes.import_data.ImportBrainVisionAscii":{output_spec:[5,2,1,""]},"neuropype_ephy.nodes.import_data.ImportMat":{input_spec:[5,2,1,""],output_spec:[5,2,1,""]},"neuropype_ephy.nodes.ts_tools":{SplitWindows:[5,1,1,""]},"neuropype_ephy.pipelines":{brain_vision_to_conmat:[6,0,0,"-"],fif_to_inv_sol:[6,0,0,"-"],preproc_meeg:[6,0,0,"-"],ts_to_conmat:[6,0,0,"-"]},"neuropype_ephy.pipelines.brain_vision_to_conmat":{create_pipeline_brain_vision_ascii_to_spectral_connectivity:[6,3,1,""],create_pipeline_brain_vision_vhdr_to_spectral_connectivity:[6,3,1,""]},"neuropype_ephy.pipelines.fif_to_inv_sol":{create_pipeline_source_reconstruction:[6,3,1,""]},"neuropype_ephy.pipelines.preproc_meeg":{create_pipeline_preproc_meeg:[6,3,1,""]},"neuropype_ephy.power":{compute_and_save_psd:[2,3,1,""]},"neuropype_ephy.preproc":{compute_ica:[2,3,1,""],create_epochs:[2,3,1,""],create_events:[2,3,1,""],generate_report:[2,3,1,""],preprocess_fif:[2,3,1,""]},"neuropype_graph.interfaces.plot_igraph.plots":{PlotIGraphCoclass:[26,1,1,""],PlotIGraphConjCoclass:[26,1,1,""],PlotIGraphModules:[26,1,1,""]},"neuropype_graph.interfaces.radatools.rada":{NetPropRada:[27,1,1,""],PrepRada:[27,1,1,""]},"neuropype_graph.nodes.coclass":{DiffMatrices:[17,1,1,""],PlotCoclass:[17,1,1,""],PrepareCoclass:[17,1,1,""]},"neuropype_graph.nodes.correl_mat":{ComputeConfCorMat:[19,1,1,""],ConcatTS:[19,1,1,""],ExtractMeanTS:[19,1,1,""],ExtractTS:[19,1,1,""],FindSPMRegressor:[19,1,1,""],IntersectMask:[19,1,1,""],MergeTS:[19,1,1,""],SeparateTS:[19,1,1,""]},"neuropype_graph.nodes.graph_stats":{ShuffleMatrix:[20,1,1,""],SwapLists:[20,1,1,""]},"neuropype_graph.nodes.modularity":{ComputeNetList:[24,1,1,""],ComputeNodeRoles:[24,1,1,""]},"neuropype_graph.pipelines.conmat_to_graph":{create_pipeline_conmat_to_graph_density:[18,3,1,""]},"neuropype_graph.pipelines.intmat_to_graph":{create_pipeline_intmat_to_graph_threshold:[23,3,1,""]},"neuropype_graph.pipelines.nii_to_conmat":{create_pipeline_nii_to_conmat:[25,3,1,""],create_pipeline_nii_to_weighted_conmat:[25,3,1,""]},neuropype_ephy:{aux_tools:[2,0,0,"-"],compute_fwd_problem:[2,0,0,"-"],compute_inv_problem:[2,0,0,"-"],fif2ts:[2,0,0,"-"],import_ctf:[2,0,0,"-"],import_mat:[2,0,0,"-"],import_txt:[2,0,0,"-"],interfaces:[3,0,0,"-"],power:[2,0,0,"-"],preproc:[2,0,0,"-"],spectral:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function"},terms:{"5000e":15,"__main__":[11,16],"__name__":[11,16],"_sess_index_":16,"_subject_id_":16,"_test":[],"boolean":[5,6],"class":[2,4,5,17,19,20,24,26,27],"default":[4,5,6,17,19,26],"enum":4,"export":[4,5,6],"float":[2,4,6,19,24],"function":[1,2,4,6,8,9,11,17,19,24,26,27,28],"import":[2,5,11,15,16],"int":[2,4,5,6],"new":16,"return":[2,4,5,11,16],"true":[2,4,5,6,11,15,16,18,19,24,25],about:2,accord:[2,4,6,13],activ:2,add:4,adjac:6,advanc:28,after:[2,4,13,19],algorithm:[2,8],alia:[4,5],all:[2,4,5,13,19],allow:[2,9],alon:28,alpha:15,also:[6,8],amplitud:6,analys:[2,28],analysi:[],analysis_nam:23,analyz:[2,4],annapasca:[1,28],anoth:28,aparc:[2,6],appli:[6,15],arg:2,around:19,arrai:2,artefact:[2,8],artifact:[2,6,15],ascii:[5,6],aseg:[2,4,6],aseg_label:[2,4,6],associ:4,atla:[2,4,6],automat:[2,6,8,15],aux:2,averag:[2,4,6],band:[4,15],base:[2,4,6,8,13,28],base_dir:[11,16],base_directori:[11,16],basenam:2,befor:[2,4,9,16],behav:5,belong:19,below:19,bem:2,beta:15,between:[5,6,19],bid:13,bigger:28,binari:19,bold:19,bool:[2,4,5,6,19],brain:[5,13,28],brainvis:[5,6],calcul:2,can:[1,8,9,13,16,28],capit:5,cat:27,centroid:2,channel:[6,15],channel_coords_fil:11,channel_names_fil:11,channelflag:5,check:6,choic:[2,4,6],choos:5,clean:[2,9,16],clone:[1,28],coclassif:[17,26],code:16,coh:[4,6,15],cohi:[4,15],collect:2,color:[11,16],com:[1,28],command:[27,28],common:28,commonli:28,community_rada:11,compat:1,compica:4,compicainputspec:4,compicaoutputspec:4,compil:2,compon:[6,8,16],comput:[2,4,6,8,9,15,19,24],compute_and_save_psd:2,compute_fwd_sol:2,compute_ica:2,compute_noise_cov:2,compute_rois_inv_sol:2,computenetlist:[],computenoderol:[],con_den:[11,18],con_method:[4,6,11,15],concatenated_run:25,concen:19,condit:19,conf_cor_mat_fil:19,conf_interval_prob:[19,25],confid:19,config:[11,16],conmat:4,conmat_fil:[4,11],conmat_to_graph:11,connect:9,connectivti:4,consid:4,contact:[5,6],contain:[2,4,6,19],context:2,continu:2,convert:[2,5,8],convert_ds_to_raw_fif:2,convertds2fif:5,convertds2fifinputspec:5,convertds2fifoutputspec:5,convertor:2,coord:[19,26],coord_rois_fil:19,coordiant:[24,26],coordin:[2,19,26],coords_fil:[11,24],coords_rois_fil:19,cor_mat_fil:19,correct:8,correl:[],correl_analysis_nam:[11,15],correl_mat:19,correspond:24,cortic:[2,4,6],could:16,cov_filenam:[2,4],cov_fnam:2,cov_fname_in:4,covari:[],covarianca:4,cpu:16,creat:[2,4,6,16],create_datasourc:[11,16],create_epoch:[2,4],create_ev:2,create_infosourc:[11,16],create_main_workflow_spectral_modular:11,create_noise_cov:9,create_pipeline_brain_vision_ascii_to_spectral_connect:6,create_pipeline_brain_vision_vhdr_to_spectral_connect:6,create_pipeline_conmat_to_graph_dens:11,create_pipeline_intmat_to_graph_threshold:[],create_pipeline_nii_to_conmat:[],create_pipeline_nii_to_weighted_conmat:[],create_pipeline_preproc_meeg:[6,8,16],create_pipeline_source_reconstruct:[6,9],create_pipeline_time_series_to_spectral_connect:11,create_t:11,create_ts_nod:11,create_workflow_preproc:16,createep:4,createepinputspec:4,createepoutputspec:4,criteria:2,csf:19,ctf:2,cumul:6,current:2,cut:6,data:[9,11],data_field_nam:5,data_path:[11,15,16],data_typ:[6,15,16],datagrabb:[11,16],dataset:13,datasourc:[11,16],datataset:13,davidmeunier79:[1,28],decomposit:8,deep:2,def:[11,16],defin:[2,4,6,9,28],definit:4,defualt:[4,6],deim:27,delta:15,densiti:[4,24],desc:[4,5,19,24],dev:1,develop:[1,28],dict:[2,4,6,11,15,16],dictionari:[2,4,6],differ:[8,28],dipol:9,dir:[8,15],directori:[2,4,6,15,16],directoti:8,dmalt:28,done:6,down_sfreq:[2,6,15,16],download:[1,13,15,16],downloadandinstal:1,downsampl:[2,6,15],ds2fif:8,ds_file:2,dspm:[2,4,6],each:[5,6,8,9,28],easi:28,ecg:[6,15],ecg_ch_nam:[2,6,15,16],ecg_evok:2,ecg_ind:2,ecg_scor:2,edu:1,eeg:[2,6,8,28],either:[8,9],elec_names_fil:5,electa:5,electrod:[5,6],electrophysiolog:[1,2,28],emploi:2,empti:2,end:4,engin:[11,16,28],eog:[6,15],eog_ch_nam:[2,6,15,16],eog_evok:2,eog_ind:2,eog_scor:2,ep2t:[2,5],ep2tsinputspec:5,ep2tsoutputspec:5,ep_length:2,ephi:5,ephypyp:1,epo:[2,4,6],epoch:[5,9],epoch_length:2,epoch_window_length:[4,11,15],epochs_fnam:2,estim:9,even:2,event:[2,4,6],events_id:[2,4,6],evok:4,exampl:10,except:2,exclud:[6,8,16],execut:[11,16],exist:[4,5,19,24,28],exit:2,explain:6,export_to_matlab:4,extract:[17,19,20],facilit:28,fals:[2,4,6,11,16,18,19,23,24],fast:28,field:[],fif:[2,4,5,6,8,11,15,16,28],fif_fil:2,file:5,file_4d:19,filenam:[2,4,6,16],fill:6,filter:[],filter_gm_threshold:25,filter_mask:19,filter_mask_fil:19,filter_spectr:6,filter_thr:19,filtered_coords_rois_fil:19,filtered_indexed_rois_fil:19,filtered_labels_rois_fil:19,filtered_mni_coords_rois_fil:19,filtermask:19,fine:8,fisher:19,flag:8,fmax:2,fmin:2,fmri:28,fname:2,focu:28,folder:2,follow:[1,16],format:[2,4,5,6,8,15,16,17,19,20,24,27,28],fortran:2,forward:[2,4],found:8,framework:28,freq_band:[4,11,15],freq_band_nam:[11,15],frequenc:[4,6,15],from:[5,9,11],fruchterman:26,fswiki:1,full:2,fwd_filenam:[2,4],gamma1:15,gamma2:15,gener:[2,8,17,19],generate_report:2,get:[8,10],get_freq_band:11,getpass:15,git:[1,28],github:[1,28],given:[4,19,27],gomez:27,good:8,good_channels_field_nam:5,grab:16,grad:[6,15],graph2us:[11,16],graph:10,graph_den_pip:[11,18],graphic:26,grei:19,grid:9,group:26,h_freq:[2,6,15,16],had:6,half:26,harvard:1,have:[6,15,17,19,20],heart:[2,8],heog:15,here:[8,15],high:6,higher:19,how:[8,10],html:[1,16,26],http:[1,26,27,28],iac:[],ica:11,ico:[4,6],identityinterfac:[11,16],igraph:26,ijk:19,ijk_coord:19,imag:[13,28],imcoh:[4,15],implement:[2,8,16,28],importbrainvisionascii:5,importbrainvisionasciioutputspec:5,importmat:5,importmatinputspec:5,importmatoutputspec:5,includ:[2,4,6,8,16,28],includem:[],independ:5,index:[4,11,19,22,28],indexed_rois_fil:19,individu:9,infield:[11,16],info:[11,16],inform:[2,4,28],infosourc:[11,16],input:[2,4,5,6,8,9,11,16,17,19,20,24,26,27,28],input_nam:11,input_spec:[4,5],inputnod:[11,16],inspect:[8,16],install_mne_c:1,instanc:6,instruct:1,int_graph_thr_pip:23,integ:[5,24],interest:[17,19,20],interfac:[],interv:[2,4,6,19],intmat_to_graph:[],intraeeg:[5,6],inv_method:[2,4,6],inv_sol_pipelin:6,inv_solut:9,invers:[],inverse_solut:[],inversesolut:4,ipynb:16,ipynb_report:16,is_epoch:[2,4,6],is_evok:[2,4,6],is_ica:[6,15],is_sensor_spac:[4,6,11],is_set_ica_compon:6,iter:[11,16],jupyt:[8,16],just:2,k_neigh:6,keep:19,kei:6,kept:[4,19],kill:2,kind:15,kit:28,kwarg:[4,5],kwd:2,l_freq:[2,6,15,16],label:[4,17,19,20,26],label_coords_fil:2,label_names_fil:2,labels_fil:[2,4,11,19],labels_rois_fil:19,later:1,launch:27,lead:[],leadfield:2,learn:1,least:2,lego:[6,28],length:2,let:2,letter:5,level:2,lf_comput:[],lfcomput:4,librari:2,line:[4,28],link:13,linuxinstal:1,list:5,load:2,local:16,lol:24,look:8,low:6,mag:[6,15],main:[2,6,8,15,28],main_path:[6,11,15,16,18,23,25],main_workflow:[11,16],mainli:2,manag:2,mandatori:[4,5,19,24],mani:28,martino:1,mask:[17,19,20],mat:5,matlab:[5,28],matric:[4,15,17,19,28],matrix:[2,4,5,6,9,17,18,23,24,25,26],matter:19,max:[4,17],mayb:28,mean:[17,19,20],mean_masked_ts_fil:19,meg:[2,8,11,15,16,28],meg_data:15,merg:19,method:[2,4,6],metric:4,mgh:1,min:[4,17],min_bold_intens:19,mix:[2,4,6],mni:19,mni_coord:19,mni_coords_rois_fil:19,mod:[11,18,23],modal:28,modular:[],more:[2,8,28],movement:19,mri:9,mult_regnam:25,multi:[18,28],multi_con:[4,6],multipl:4,multiproc:[11,16],n_comp_exclud:6,n_compon:2,n_fft:2,n_job:2,n_overlap:2,n_proc:[11,16],n_r:[2,4],n_window:[5,6],name:[2,4,5,6,11,15,16,19],nb_line:4,ndarrai:5,ndarri:5,need:[9,13],net:[24,27],net_list_fil:24,netproprada:[],network:[24,26,27],network_properti:27,neural:9,neuro:28,neurodaddi:22,neuroimag:28,neuropyconn_doc:[],neuropyp:[],nifti:[17,19,20,25],nii:19,nii_to_conmat:[],nii_to_weighted_conmat:25,nio:[11,16],nipyp:[1,11,16,28],nmr:1,node:[],nois:[],noise_cov:2,noise_cov_fnam:6,noisecovari:4,non:19,none:[2,4,6,27],normal:[5,19,24],nostdout:2,notebook:[8,16],now:1,npy:[2,4,5,19,28],number:5,numpi:[1,2,5,19,28],off:6,omega:[13,15],ongo:2,onli:[1,19],open:28,oper:[2,4],optim_seq:[11,18],option:[17,26],optionn:19,org:[1,26],organ:13,origin:[2,24],otherwis:26,out:6,outfield:[11,16],outout:6,output:[2,4,5,8,9,16,19,24,28],output_nam:11,output_spec:[4,5],page:[22,28],pajek:27,param:11,paramet:[],parc:[2,4,6],parcel:[2,4,6],particular:[8,9,13,28],partit:24,pass:16,path:[],peak:6,percent:19,percent_sign:19,percentag:6,perform:[2,6,8,9,16],permut:20,php:27,pick:2,pickl:19,pip:[1,28],pipeline_nam:[6,18,25],plan:1,pli2_unbias:[4,15],pli:[4,15],plot:[4,11,17,18,19,23,26],plot_circular_connect:[4,6],plot_conmat_fil:4,plot_fig:19,plot_igraph:[],plot_mat:19,plotigraphcoclass:[],plotigraphconjcoclass:[],plotigraphmodul:[],plotspectralconn:4,plugin:[11,16],plugin_arg:[11,16],plv:[4,15],point:5,possibl:[2,4,6,8,16,28],ppc:[4,15],pre:2,prepar:20,preprada:[],preproc_pipeline_nam:[15,16],preproc_workflow:16,preprocess:[],preprocess_fif:[2,4],preprocessing_pipelin:15,preprocfif:4,preprocfifinputspec:4,preprocfifoutputspec:4,present:19,print:[2,11],process:[2,28],proj:2,project:[13,28],proper:22,properti:[18,23,27],provid:[2,13,26,28],psd:2,python2:1,python3:1,python:[1,2,4,8,9,16,28],rada:27,radatool:24,radatools_optim:[11,23],rais:2,rang:17,raw:[5,9,11],raw_fil:[11,16],raw_file_ica:16,raw_file_ica_solut:16,raw_filenam:[2,4],raw_fnam:11,raw_info:[2,4],read:2,read_noise_cov:2,recommend:2,reconstruct:[],redirect:26,region:[2,4,6],registr:13,regress:19,regressor:19,regular:[2,4],reingold:26,reject:[2,6,15],relat:[2,8,13],releas:1,remov:[2,6,8,15],remove_unnecessary_output:[11,16],repair:5,report:[2,6,8,16],represent:[4,26],residu:19,rest:[11,16],result:2,retain:19,roi:[2,4,6,19],roi_mask_fil:25,role:24,room:2,rule:8,run:[2,8,11,16],run_preprocess_pipelin:16,same:[6,8,19],sampl:[4,5,6,13,15],sample_bids_omega:15,sample_s:[5,6],save:[2,4,5,6,8,16],save_stc:[2,4,6],sbj_dir:[2,4,6],sbj_id:[2,4],scale:4,scikit:1,scipi:2,score:19,script:[],search:[22,28],section:[0,8],see:[0,8,10,16,27,28],seealso:[],segment:2,select:6,sensor:[2,6],sep:5,sep_label_nam:[5,6],separ:5,sergio:27,seri:[2,4,5,6,9,16,17,19,20,28],sess_index:[11,16],session:[6,11,15,16],set:9,setup:[1,4,6,28],sever:[5,19],sfreq:[4,6,11],signal:[8,19],sinc:2,size:5,sloreta:[2,4,6],snr:[2,4],solut:[],some:6,sometim:5,sort_filelist:[11,16],sotwar:1,sourc:5,space:[2,4,5,6,26],spec:5,specif:[4,5,13],specifi:[2,9,15,16,19,26,28],spectral_connectivity_:15,spectral_workflow:11,spectralconn:4,split:[2,5,6],splitted_ts_fil:5,splitwindow:5,spm_reg:25,spontan:2,src:2,stand:28,standard:2,standart:2,start:[2,4,5,9,19],stat:20,stc:[2,4,6],stderr:2,stdout:2,step:[9,28],stop:5,store:[8,15],str:[2,4,6],strang:5,string:[4,5],structur:[2,5,13,26],sub:[2,4,6,15],subj_coord_rois_fil:19,subj_nam:2,subject:9,subject_id:[11,15,16],submodul:[],subsequ:28,substructur:[2,4,6],sudo:[1,28],suppress:2,suppress_stdout_stderr:2,surfer:1,t_max:[2,4,6],t_min:[2,4,6],templat:[9,11,16],template_arg:[11,16],tempor:5,test:11,text:5,them:16,theta:15,thi:[2,9,19],think:2,thread:28,three:[9,28],threshold:[19,23,24,26],through:2,time:[2,4,5,6,9,16,17,19,20,28],timeseri:[2,19],tmax:4,togeth:28,tool:28,topographi:[6,16],topolog:26,trans_fnam:2,transpos:19,transpose_t:19,trasform:19,trfr:18,trial:5,ts_file:[2,4,5,11,19],tsmat_fil:5,tune:8,tupl:5,tutori:8,two:5,txt:[5,6,19],txt_file:5,type:[4,5,6,19,24],unsplit:5,urv:27,usedefault:[4,5,19],user:[9,28],util:[11,16],valid:6,valu:[2,4,6,17,19,20],variabl:[],varianc:[6,15,16],veog:15,verbos:2,veri:28,vision:5,visual:16,vmax:4,vmin:4,volum:19,voxel:[17,19,20],wai:28,want:[2,4,6,15],websit:13,weight:[19,24,27],weight_fil:19,welch:2,well:[2,4,5,6,28],what:4,where:[2,13,15,16,17,19,20,28],whether:19,which:[2,4,6,15,16,28],white:19,why:2,window:5,within:15,without:2,work:1,workflow:[6,8,11,16,28],wpli2_debias:[4,15],wpli:[4,15],wrap:[6,9,26,27,28],write:[8,10],write_graph:[11,16],xor:24,z_cor_mat_fil:[19,24],zero:19},titles:["CINQ","README","neuropype_ephy","neuropype_ephy.interfaces package","neuropype_ephy.interfaces.mne package","neuropype_ephy.nodes package","neuropype_ephy.pipelines package","Inverse solution Nodes","Preprocessing pipeline","Source reconstruction pipeline","Connectivity pipeline","Spectral connectivity and graph pipeline","From epoch data to graph theoretical analysis","Examples","Source reconstruction pipeline","params file","From raw data to preprocessed data","CoClass","conmat_to_graph","Correl Mat","Graph_stats","README :","Welcome to Neuropype_graph&#8217;s documentation!","intmat_to_graph","Modularity","nii_to_conmat","Plot_igraph","Radatools","NeuroPype documentation"],titleterms:{analysi:12,aux_tool:2,brain_vision_to_conmat:6,cinq:[0,28],coclass:17,compute_fwd_problem:2,compute_inv_problem:2,computeconfcormat:19,computenetlist:24,computenoderol:24,concatt:19,conmat_to_graph:18,connect:[10,11,15],content:[3,4],correl:19,covari:7,create_pipeline_conmat_to_graph_dens:18,create_pipeline_intmat_to_graph_threshold:23,create_pipeline_nii_to_conmat:25,create_pipeline_nii_to_weighted_conmat:25,data:[12,16],descript:1,diffmatric:17,document:[1,22,28],epoch:12,exampl:[13,28],extractm:19,extractt:19,field:7,fif2t:2,fif_to_inv_sol:6,file:15,filter:15,findspmregressor:19,freesurf:1,from:[12,16],graph:[11,12],graph_stat:20,ica:15,import_ctf:2,import_data:5,import_mat:2,import_txt:2,indic:[22,28],instal:[1,2,28],interfac:[3,4],intersectmask:19,intmat_to_graph:23,invers:7,inverse_solut:4,lead:7,lf_comput:4,list:15,mat:19,merget:19,mne:[1,4],modul:[2,3,4,5,6],modular:24,netproprada:27,neuropyp:28,neuropype_cli:28,neuropype_ephi:[1,2,3,4,5,6,28],neuropype_graph:[1,22,28],nii_to_conmat:25,node:[5,7],nois:7,packag:[1,3,4,5,6,28],param:15,paramet:15,path:15,pipelin:[2,6,8,9,10,11,14],plot_igraph:26,plotcoclass:17,plotigraphcoclass:26,plotigraphconjcoclass:26,plotigraphmodul:26,power:[2,4],preparecoclass:17,preprada:27,preproc:[2,4],preproc_meeg:6,preprocess:[8,16],radatool:27,raw:16,readm:[1,21],reconstruct:[9,14],requir:1,script:13,separatet:19,set:15,shufflematrix:20,softwar:1,solut:7,sourc:[9,14],spectral:[2,4,11],subject:15,submodul:4,subpackag:[2,3],swaplist:20,tabl:[22,28],theoret:12,ts_to_conmat:6,ts_tool:5,variabl:15,welcom:22}})